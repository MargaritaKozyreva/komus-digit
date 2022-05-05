import React, { useEffect, useState } from "react";
import { Input } from "@src/ui/Input/Input";
import { CollaboratorDTO } from "@src/interfaces/collaborators.interface";

import styles from "./Table.module.scss";

interface TableProps {
  collaborators: CollaboratorDTO.IPerson[] | [] | undefined;
  onHandlerChange: (e: any) => void;
  filter?: string;
  limit?: number;
  pageCount?: number;
}

const Table: React.FC<TableProps> = props => {
  const {
    collaborators,
    onHandlerChange,
    filter,
    limit = 5,
    pageCount = 1,
  } = props;

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th>ФИО</th>
            <th>Подразделение</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {collaborators && collaborators
            // .filter(el => {
            //   const finderString = Object.values(el).join("").toLowerCase();
            //   return finderString.includes(filter?.trim().toLowerCase() || "");
            // })
            .map(collaborator => {
              return (
                <tr key={collaborator.id}>
                  <td>
                    <Input
                      id={collaborator.id}
                      type="checkbox"
                      onChange={onHandlerChange}
                    />
                  </td>
                  <td>{collaborator.fullname}</td>
                  <td>
                    {collaborator.code} {collaborator.org_name}
                  </td>
                  <td>{collaborator.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {/* <div className={styles.paginationWrapper}>
        <ul>
          {pageCount > 0 &&
            Array.from(Array(pageCount)).map((page, i) => {
              return <li key={i}>{i+1}</li>;
            })}
        </ul>
      </div> */}
    </div>
  );
};

export default Table;
