import { VehicleInfoContainer } from "./style";

export interface IInfoVehicleProps {
  colorClass: "vehiclePrice-grey" | "vehiclePrice-white";
  km: number;
  price: number;
  year: string;
}

const InfoVehicle = (props: IInfoVehicleProps) => {
  return (
    <VehicleInfoContainer>
      <div className="vehicleInfoDetails">
        <div className="vehicleDetails">{props.km} KM</div>
        <div className="vehicleDetails">{props.year}</div>
      </div>
      <div className={props.colorClass}>R${props.price}</div>
    </VehicleInfoContainer>
  );
};

export default InfoVehicle;
