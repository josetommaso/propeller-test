import React, { useState } from "react";
import useNews from "../hooks/useNews";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchForm = () => {
  const [category, setCategory] = useState("general");

  const { searchNews } = useNews();

  const OPTIONS = [
    { value: "general", label: "General Interest" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];

  const searchNewsSubmit = (e) => {
    e.preventDefault();
    searchNews(category);
  };

  return (
    <div className="row mt-5">
      <div className="col-md-6 offset-md-3">
        <Form onSubmit={searchNewsSubmit} className="d-flex">
          <Form.Select
            aria-label="news categories"
            onChange={(e) => setCategory(e.target.value)}
          >
            {OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
          <Button type="submit" variant="primary" className="ms-2">
            Search
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SearchForm;
