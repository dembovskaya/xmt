import React, { FC } from "react";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
interface ButtonProps {
  text: string,
  onClick: any,
  endIcon?: JSX.Element,
  ref?: React.MutableRefObject<null>
}

const styles = {
  contained: {
    backgroundColor: "#F04E36",
    color: "#FFF",
    border: "2px solid",
    borderColor: "#F04E36",
    borderRadius: "8px",
    textTransform: "none",
    height: "52px",
    width: "149px",
    gap: "10px",
    fontWeight: "500",
    "&:hover": {
      color: "#F04E36",
      border: "2px solid",
      borderColor: "#F04E36",
      textTransform: "none",
    },
    "&:active": {
      backgroundColor: "#D94B36",
      color: "#FFF",
      textTransform: "none",
    },
    "&:disabled": {
      color: "#C3C4C6",
      border: "2px solid",
      borderColor: "#C3C4C6",
      textTransform: "none",
    },
  },
  containedForm: {
    backgroundColor: "#2B2B2B",
    color: "#FFF",
    border: "2px solid",
    borderColor: "#2B2B2B",
    borderRadius: "8px",
    height: "52px",
    width: "149px",
    gap: "10px",
    fontWeight: "500",
    "&:disabled": {
      color: "#C3C4C6",
      border: "2px solid",
      borderColor: "#C3C4C6",
      textTransform: "none",
    },
  },
  outlinedLight: {
    color: "#FFF",
    border: "2px solid",
    borderColor: "#FFF",
    borderRadius: "8px",
    height: "52px",
    px: "30px",
    py: "15px",
    fontWeight: "500",
    "&:hover": {
      color: "#FFF",
      border: "2px solid transparent",
    },
    "&:active": {
      background:
        "linear-gradient(90deg, rgba(240,78,54,1) 35%, rgba(150,88,179,1) 100%)",
      color: "#FFF",
      border: "2px solid transparent",
    },
    "&:disabled": {
      color: "#848484",
      border: "1px solid",
      borderColor: "#848484",
    },
  },
  outlinedDark: {
    color: "#4E4F52",
    border: "1px solid",
    borderColor: "#4E4F52",
    borderRadius: "8px",
    height: "52px",
    padding: "15px, 30px, 15px, 30px",
    fontWeight: "700",
    "&:hover": {
      background:
        "linear-gradient(90deg, rgba(240,78,48,1) 35%, rgba(97,94,252,1) 100%)",
      color: "#FFF",
      border: "1px solid transparent",
    },
    "&:active": {
      background:
        "linear-gradient(90deg, rgba(240,78,54,1) 35%, rgba(150,88,179,1) 100%)",
      color: "#FFF",
      border: "1px solid transparent",
    },
    "&:disabled": {
      color: "#C3C4C6",
      border: "1px solid",
      borderColor: "#C3C4C6",
    },
  },
  text: {
    color: "#4E4F52",
    height: "52px",
    padding: "15px, 30px, 15px, 30px",
    fontWeight: "700",
    "&:hover": {
      background:
        "linear-gradient(90deg, rgba(240,78,48,1) 35%, rgba(97,94,252,1) 100%)",
      textColor:
        "linear-gradient(90deg, rgba(240,78,48,1) 35%, rgba(97,94,252,1) 100%)",
    },
    "&:active": {
      textColor:
        "linear-gradient(90deg, rgba(240,78,54,1) 35%, rgba(150,88,179,1) 100%)",
    },
    "&:disabled": {
      textColor: "#C3C4C6",
    },
  },
  textList: {
    color: "#4E4F52",
    height: "52px",
    fontWeight: "500",
    fontSize: '24px',
    textTransform: "none",
    // "&:hover": {
    //   borderLeft: "2px solid #F04E36",
    //   textColor:
    //     "linear-gradient(90deg, rgba(240,78,48,1) 35%, rgba(97,94,252,1) 100%)",
    // },
    "&:active": {
      // borderLeft: "2px solid #F04E36",
      textColor:
        "linear-gradient(90deg, rgba(240,78,54,1) 35%, rgba(150,88,179,1) 100%)",
    },
    "&:disabled": {
      textColor: "#C3C4C6",
    },
  },
  headBar: {
    color: "#FFF",
    fontSize: "16px",
    height: "52px",
    fontWeight: "500",
    textTransform: "none",
    border: "1px solid",
    paddingRight: "30px",
    borderColor: "#2B2D2D",
    "&:hover": {
      color: "#FFF",
    },
    "&:active": {
      color: "#FFF",
    },
  },
  footer: {
    color: "#C3C4C6",
    fontWeight: "400",
    textTransform: "none",
    padding: "4px",
    borderColor: "#2C2D30",
    fontSize: "14px",
    "&:hover": {
      textColor:
        "linear-gradient(90deg, rgba(240,78,48,1) 35%, rgba(97,94,252,1) 100%)",
    },
    "&:active": {
      textColor:
        "linear-gradient(90deg, rgba(240,78,54,1) 35%, rgba(150,88,179,1) 100%)",
    },
    "&:disabled": {
      textColor: "#C3C4C6",
    },
  },
};

export const ButtonContained: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Button onClick={onClick} sx={styles.contained}>
      {text}
    </Button>
  );
};

export const ButtonContainedForm: FC<ButtonProps> = ({ text, onClick }) => {
  return (
      <Button onClick={onClick} sx={styles.containedForm}>
        {text}
      </Button>
  );
};

export const ButtonOutlinedLight: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Button onClick={onClick} sx={styles.outlinedLight}>
      {text}
    </Button>
  );
};

export const ButtonOutlinedDark: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Button onClick={onClick} sx={styles.outlinedDark}>
      {text}
    </Button>
  );
};

export const ButtonText: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Button onClick={onClick} sx={styles.text}>
      {text} <EastIcon />
    </Button>
  );
};

export const ButtonTextList: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <Button onClick={onClick} sx={styles.textList}>
      {text}
    </Button>
  );
};

export const ButtonHeadBar: FC<ButtonProps> = ({ text, onClick, endIcon }) => {
  return (
    <Button endIcon={endIcon} onClick={onClick} sx={styles.headBar}>
      {text}
    </Button>
  );
};

export const ButtonFooter: FC<ButtonProps> = ({ text, onClick, endIcon, ref }) => {
  return (
    <Button endIcon={endIcon} onClick={onClick} sx={styles.footer}>
      {text}
    </Button>
  );
};
