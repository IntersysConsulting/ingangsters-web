import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "./Paginator.css";
import { connect } from "react-redux";
import { fetchProducts } from "../../../../actions/creators/adminProducts";

const Paginator = ({
  currentPage,
  totalItems,
  itemsPerPage,
  navigateFunction
}) => {
  var lastPage =
    totalItems % itemsPerPage === 0
      ? totalItems / itemsPerPage
      : Math.trunc(totalItems / itemsPerPage) + 1;
  const maxNeighbours = 1;

  var itemsSkippedOnLeft = currentPage - 2 - maxNeighbours;
  var hasLeftEllipsis = itemsSkippedOnLeft > 1;
  var leftPart = [];

  const itemsSkippedOnRight = lastPage - (currentPage + maxNeighbours) - 1;
  var hasRightEllipsis = itemsSkippedOnRight > 1;
  var rightPart = [];

  function goto(page) {
    navigateFunction(page);
  }

  function prev() {
    navigateFunction(currentPage - 1);
  }

  function next() {
    navigateFunction(currentPage + 1);
  }

  function fillPages(from, to) {
    const pages = [];
    var step = from;
    while (step <= to) {
      pages.push(
        <Pagination.Item
          key={"page" + step}
          onClick={goto.bind(null, step)}
          className="removable"
        >
          {step}
        </Pagination.Item>
      );
      step++;
    }
    return pages;
  }

  // Handle left part of the paginator ( < 1 ... 4 5)
  var leftItemsPage;
  if (hasLeftEllipsis) {
    leftItemsPage = currentPage - maxNeighbours;
    leftPart.push(
      <Pagination.Item
        key={"page1"}
        onClick={goto.bind(null, 1)}
        className="removable"
      >
        1
      </Pagination.Item>
    );
    leftPart.push(
      <Pagination.Ellipsis key={"ellipsis1"} className="removable" />
    );
  } else {
    leftItemsPage = currentPage - maxNeighbours - itemsSkippedOnLeft - 1;
  }
  leftPart = leftPart.concat(fillPages(leftItemsPage, currentPage - 1));

  // Handle right part of the paginator ( 6 7 ... 10 > )
  if (hasRightEllipsis) {
    rightPart = fillPages(currentPage + 1, currentPage + maxNeighbours);
    rightPart.push(
      <Pagination.Ellipsis key={"ellipsis2"} className="removable" />
    );
    rightPart.push(
      <Pagination.Item
        key={"page" + lastPage}
        onClick={goto.bind(null, lastPage)}
        className="removable"
      >
        {lastPage}
      </Pagination.Item>
    );
  } else {
    rightPart = fillPages(currentPage + 1, lastPage);
  }

  return (
    <Pagination>
      <Pagination.Item
        disabled={currentPage === 1}
        className="arrow"
        onClick={prev}
      >
        {"<"}
      </Pagination.Item>
      {leftPart}
      <Pagination.Item active>{currentPage}</Pagination.Item>
      {rightPart}
      <Pagination.Item
        disabled={currentPage === lastPage}
        className="arrow"
        onClick={next}
      >
        {">"}
      </Pagination.Item>
    </Pagination>
  );
};

const mapStateToProps = state => ({
  currentPage: state.adminProducts.currentPage,
  totalItems: state.adminProducts.totalItems,
  itemsPerPage: state.adminProducts.itemsPerPage,
  allowRender:
    !state.adminProducts.fetching && state.adminProducts.finishedFetching
});

export default connect(
  mapStateToProps,
  { navigateFunction: fetchProducts }
)(Paginator);
