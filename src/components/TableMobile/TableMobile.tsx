import React, { useEffect, useState } from "react";
import { Input } from "@src/ui/Input/Input";
import { CollaboratorDTO } from "@src/interfaces/collaborators.interface";

import styles from "./TableMobile.module.scss";

interface TableMobileProps {
  collaborators: CollaboratorDTO.IPerson[] | [] | undefined;
  onHandlerChange: (e: any) => void;
  filter?: string;
  limit?: number;
  pageCount?: number;
}

const TableMobile: React.FC<TableMobileProps> = props => {
  const {
    collaborators,
    onHandlerChange,
    filter,
    limit = 5,
    pageCount = 1,
  } = props;

  return (
    <div className={styles.tableMobile}>
      {collaborators &&
        collaborators.map(collaborator => {
          return (
            <div key={collaborator.id} className={styles.wrapper}>
              <div className={styles.checkBox}>
                <Input
                  id={collaborator.id}
                  type="radio"
                  onChange={onHandlerChange}
                  className={styles.input}
                />
                <div className={styles.person}>{collaborator.fullname}</div>
              </div>
              <div className={styles.position}>
                {collaborator.code} {collaborator.org_name}
              </div>
              <div className={styles.email}>{collaborator.email}</div>
            </div>
          );
        })}
    </div>
  );
};

export { TableMobile };
