/** @format */

export default function Table({ children }) {
  return (
    <div>
      <table>{children}</table>
    </div>
  );
}

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row  bg-primary/5">{children}</tr>
    </thead>
  );
}

function Tablebody({ children }) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = Tablebody;
Table.Row = TableRow;
