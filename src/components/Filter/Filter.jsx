import React from "react";
import { Select } from "antd";

import { BRANDS } from "../../utils/listOfBrands";
import { PRICE } from "../../utils/listOfPrice";

import { useState } from "react";

import { Form, Div, Input } from "./Filter.styled";

const Filter = ({ setFilter, setPage }) => {
  const [brand, setBrand] = useState(null);
  const [price, setPrice] = useState(null);
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = {
      brand: brand,
      price: price,
      mileageFrom: mileageFrom,
      mileageTo: mileageTo,
    };

    console.log(items);
    setPage(1);
    setFilter(items);
    reset();
  };

  const reset = () => {
    setBrand("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Div>
        <p>Car brand</p>
        <Select
          showSearch
          placeholder="Enter the text"
          optionFilterProp="Car brand"
          onChange={(value) => {
            setBrand(value);
          }}
          filterOption={filterOption}
          options={BRANDS}
        />
      </Div>
      <Div>
        <p>Price/ 1 hour</p>
        <Select
          showSearch
          placeholder="To $"
          optionFilterProp="Car price"
          onChange={(value) => {
            setPrice(value);
          }}
          filterOption={filterOption}
          options={PRICE}
        />
      </Div>
      <Div>
        <p>Car mileage / km</p>
        <Input>
          <input
            type="number"
            placeholder="From"
            onChange={({ target }) => {
              setMileageFrom(target.value);
            }}
          />
          <input
            type="number"
            placeholder="To"
            onChange={({ target }) => {
              setMileageTo(target.value);
            }}
          />
        </Input>
      </Div>
      <button type="submit">Search</button>
    </Form>
  );
};

export default Filter;
