//children props example export 용 page

interface IExampleProps {
  schoolProps: string;
  children: JSX.Element;
}

export default function Example(props: IExampleProps): JSX.Element {
  return (
    <div>
      <div>안녕하세요 유리입니다. </div>
      <div>{props.schoolProps}</div>
      <div>{props.children}</div>
    </div>
  );
}
