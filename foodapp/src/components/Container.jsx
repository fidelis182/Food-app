import sytles from "./Module/container.module.css";
export default function Container({ children }) {
  return <div className={sytles.parentConatiner}>{children}</div>;
}
