import React from "react";
import { Row } from "react-bootstrap";
import { PropagateLoader } from "react-spinners";
import useNews from "../hooks/useNews";
import New from "./New";

const override = {
  textAlign: "center",
  display: "block",
};

const NewsList = () => {
  const { news, loading } = useNews();

  return (
    <Row className="mt-5">
      {loading ? (
        <PropagateLoader cssOverride={override} />
      ) : (
        news.map((item, index) => <New key={index} item={item} />)
      )}
    </Row>
  );
};

export default NewsList;
