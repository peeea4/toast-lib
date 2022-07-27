import * as info from "../../stories/assets/info.png";
import * as error from "../../stories/assets/danger.png";
import * as warning from "../../stories/assets/warning.png";

export const Icon = ({ name }) => {
    if (name === "warning") {
        return <img src={warning} />;
    } else if (name === "danger") {
        return <img src={error} />;
    } else if (name === "success") {
        return <img src={error} />;
    } else {
        return <img src={info} />;
    }
};
