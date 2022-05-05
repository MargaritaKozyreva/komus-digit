import React, { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import styles from './CourseCard.module.scss';
import cn from 'classnames';

interface CourseCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
  design?: "default"
}

const CourseCard: React.FC<PropsWithChildren<CourseCardProps>> = (props) => {

  const {children, className, design='default', ...attr} = props;

  return (
    <div className={cn(styles.card, className, {
      [styles.default]: design === 'default'
    })}
    {...attr}>
      {children}
      
    </div>
  )
}

export {CourseCard}