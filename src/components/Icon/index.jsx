import PropTypes from "prop-types";

import * as error from "@/assets/error.png";
import * as info from "@/assets/info.png";
import * as success from "@/assets/success.png";
import * as warning from "@/assets/warning.png";

const icons = {
    error,
    info,
    success,
    warning,
};

export const Icon = ({ name }) => <img src={icons[name]} />;

Icon.propTypes = {
    name: PropTypes.string,
};
