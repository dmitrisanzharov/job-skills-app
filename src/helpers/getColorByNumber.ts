import { green, amber, red } from "@mui/material/colors";

// do NOT pass NULL or UNDEFINED into this
export function getColorByNumber(num: number): string {
    if (num === null || num === undefined) {
        throw new Error("Number cannot be null or undefined");
    }

    if (num < 0 || num > 10) {
        throw new Error("Number must be between 0 and 10");
    }

    if (num >= 8) {
        return green[600];   // GOOD
    } else if (num >= 5) {
        return amber[600];   // OK
    } else {
        return red[700];     // BAD
    }
}
