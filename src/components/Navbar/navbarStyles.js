export const navStyles = {
  as: "nav",
  bg: "primaryColor",
  maxW: "100vw",
  px: "50px",
  h: "70px",
  "justify-content": "center",
  "align-items": "center",
  "border-bottom": "1px solid #eee",
};

export const linksStyles = {
  as: "ul",
  "list-style": "none",
  w: "100%",
  h: "100%",
  "justify-content": "space-around",
  "align-items": "center",
  "font-size": "20px",
  "font-weight": "400",
  color: "primaryTextColor",
};

export const hoverStyles = {
  as: "li",
  fontWeight: 500,
  cursor: "pointer",
  ":hover": {
    color: "secondaryTextColor",
    transition: "all 0.3s ease-in-out",
  },
};
