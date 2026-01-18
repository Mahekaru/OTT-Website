import activeIndicator from "../assets/Active-Indicator-1.svg";

interface Props {
    header: string;
}

const HeaderIndicator = ({ header }: Props) => {
  return (
    <div className="container col ">
      <h1 className="align-self-center">{header}</h1>
      <img className="h16" src={activeIndicator} alt="Active Indicator"></img>
    </div>
  );
};

export default HeaderIndicator;