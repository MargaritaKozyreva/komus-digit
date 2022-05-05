import React, { useEffect, useState } from "react";
import Table from "@src/components/Table/Table";
import { Input } from "@src/ui/Input/Input";
import { WithSkeleton } from "@src/ui/WithSkeleton";
import MinusIcon from "@ui/Icons/MinusIcon.svg";
import Button from "@src/ui/Button";
import { useParams } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Search } from "@src/ui/Search/Search";
import styles from "./AssessmentTable.module.scss";
import { useSearchParams } from "react-router-dom";
import { httpService } from "@src/core/service";
import { useDispatch } from "react-redux";
import { CollaboratorDTO } from "@src/interfaces/collaborators.interface";
import { getCollsForAssessmentCourses } from "./dataContext/AssessmentTableContext";
import ReactPaginate from "react-paginate";
import { modalActions } from "@src/modules/Modal/redux/ModalSlices";
import { useWindowSize } from "@src/hooks/useWindowSize/useWindowSize";
import { TableMobile } from "@src/components/TableMobile/TableMobile";

const AssessmentTable: React.FC = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [tableData, setTableData] = useState<Array<any>>([]);
  const [limit, setLimit] = useState<number>(5);
  const [pageCount, setPageCount] = useState<number>(1);
  const [pageCountInitialCopy, setPageCountInitialCopy] = useState<number>(1);
  const [searchParam, setSearchParam] = useSearchParams();
  const [collsInitialCopy, setCollsInitialCopy] = useState<
    CollaboratorDTO.IPerson[] | []
  >([]);
  const [pageNum, setPageNum] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const { width, height } = useWindowSize();

  const param = useParams();
  const searchQuery = searchParam.get("search_user") || "";

  interface ICollData {
    colls: CollaboratorDTO.IPerson[] | [];
    limit: number;
    pageCount: number;
  }
  const [collData, setCollData] = useState<ICollData | null>({
    colls: [],
    limit: limit,
    pageCount: pageCount,
  });

  const [isCollLoading, setIsCollLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const result: any = dispatch(
      getCollsForAssessmentCourses({ courseId: param["id"] })
    );
    result.then(res => {
      setCollData(res.payload.data);
      setCollsInitialCopy(res.payload.data.colls);
      setIsCollLoading(false);
      setPageCount(res.payload.data.pageCount);
      setPageCountInitialCopy(res.payload.data.pageCount);
      setLimit(res.payload.data.limit);
    });
  }, [dispatch]);

  const onAssessmentCourse = async () => {
    await httpService("POST", "assessment_course_for_colls", undefined, {
      course_id: param["id"],
      date_start: startDate,
      date_end: endDate,
      colls: tableData,
    }).finally(() => {
      setTableData([]);
      dispatch(modalActions.hideModal());
    });
  };

  const modifySearchArray = () => {
    const endOffset = itemOffset + limit;
    setCollData(prev => {
      if (!prev) {
        return null;
      }
      const prevCopyObj = { ...prev };
      const newObj = {
        ...prevCopyObj,
        colls: collsInitialCopy.slice(itemOffset, endOffset),
      };
      return newObj;
    });
  };

  useEffect(() => {
    if (searchQuery === "") {
      modifySearchArray();
      setPageNum(
        Math.ceil(Array.from(Array(pageCountInitialCopy)).length / limit)
      );
    } else {
      const filterColls = collsInitialCopy.filter(el => {
        const finderString = Object.values(el).join("").toLowerCase();
        return finderString.includes(searchQuery?.trim().toLowerCase() || "");
      });

      setCollData(prev => {
        if (!prev) {
          return null;
        }
        const prevCopyObj = { ...prev };

        const newObj = {
          ...prevCopyObj,
          colls: filterColls,
        };

        return newObj;
      });
    }
  }, [isCollLoading, searchQuery, pageNum, limit, itemOffset]);

  const handlePageClick = event => {
    const newOffset =
      (event.selected * limit) % Array.from(Array(pageCount)).length;
    setItemOffset(newOffset);
  };

  const onHandlerChange = e => {
    setTableData(prevState => {
      const newArr = [...prevState];
      const idx = newArr.indexOf(e.target.id);
      if (idx === -1) {
        return [...newArr, e.target.id];
      } else {
        return [
          ...newArr.slice(0, idx),
          ...newArr.slice(idx + 1, newArr.length),
        ];
      }
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.timeBlock}>
          <span className={styles.blockTitle}>Когда</span>
          <div className={styles.timeWrapper}>
            <div className={styles.datePicker}>
              <label htmlFor="startDate">Начало обучения</label>
              <DatePicker
                id="startDate"
                dateFormat="dd.MM.yyyy"
                selected={startDate}
                onChange={date => setStartDate(date)}
                customInput={<Input />}
                selectsStart
                startDate={startDate}
                endDate={endDate}
              />
            </div>
            {<MinusIcon />}
            <div className={styles.datePicker}>
              <label htmlFor="endDate">Окончание обучения</label>
              <DatePicker
                id="endDate"
                dateFormat="dd.MM.yyyy"
                selected={endDate}
                onChange={date => setEndDate(date)}
                customInput={<Input />}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </div>
          </div>
        </div>
        <div className={styles.searchBlock}>
          <span className={styles.blockTitle}>Поиск по: {searchQuery}</span>
          <div className={styles.searchWrapper}>
            <Search
              searchParam={searchParam}
              searchQuery={searchQuery}
              setSearchParam={setSearchParam}
              value={searchQuery}
            />
          </div>
        </div>
        <div className={styles.tableWrapper}>
          <span className={styles.blockTitle}>Кому</span>

          <WithSkeleton
            isLoading={isCollLoading}
            isEmpty={collData?.colls?.length === 0}
          >
            {width >= 800 && (
              <Table
                collaborators={collData?.colls}
                onHandlerChange={onHandlerChange}
                filter={searchQuery}
                pageCount={pageCount}
                limit={collData?.limit}
              />
            )}
            {width < 800 && (
              <TableMobile
                collaborators={collData?.colls}
                onHandlerChange={onHandlerChange}
                filter={searchQuery}
                pageCount={pageCount}
                limit={collData?.limit}
              />
            )}

            {searchQuery === "" && (
              <ReactPaginate
                initialPage={1}
                className={styles.paginationWrapper}
                breakLabel="..."
                nextLabel="вперед >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={20}
                pageCount={pageCount}
                previousLabel="< назад"
                renderOnZeroPageCount={undefined}
              />
            )}
          </WithSkeleton>
        </div>
        {tableData.length > 0 && (
          <Button
            mode="lightBlue"
            withCircle
            size="s"
            onClick={onAssessmentCourse}
          >
            Назначить
          </Button>
        )}
      </div>
    </div>
  );
};

export default AssessmentTable;
