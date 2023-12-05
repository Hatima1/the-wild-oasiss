import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;
function Filter({ filterField, options }) {
  const [serchPrams, setSerchPrams] = useSearchParams();

  const curUrl = serchPrams.get(filterField) || options.at(0).value;

  function handlerClick(value) {
    serchPrams.set(filterField, value);
    if (serchPrams.get("page")) serchPrams.set("page", 1);
    setSerchPrams(serchPrams);
  }
  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          onClick={() => handlerClick(option.value)}
          key={option.value}
          active={curUrl === option.value}
        >
          {option.label}
        </FilterButton>
      ))}
      {/* <FilterButton onClick={() => handlerClick("all")}> all</FilterButton> */}
      {/* <FilterButton onClick={() => handlerClick("discount")}>
        discount
      </FilterButton>
      <FilterButton onClick={() => handlerClick("nodiscount")}>
        no discount
      </FilterButton> */}
    </StyledFilter>
  );
}

export default Filter;
