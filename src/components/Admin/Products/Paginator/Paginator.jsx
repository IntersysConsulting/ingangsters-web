import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "./Paginator.css";
import { connect } from "react-redux";

const Paginator = ({ currentPage, totalItems, itemsPerPage }) => {
  var lastPage =
    totalItems % itemsPerPage === 0
      ? totalItems / itemsPerPage
      : Math.trunc(totalItems / itemsPerPage) + 1;
  const maxNeighbours = 1;
  var itemsSkippedOnLeft = currentPage - 2 - maxNeighbours;
  var hasLeftEllipsis = itemsSkippedOnLeft > 1;
  const leftPart = [];
  const itemsSkippedOnRight = lastPage - (currentPage + maxNeighbours) - 1;
  console.log("Skipping " + itemsSkippedOnRight);

  var hasRightEllipsis = itemsSkippedOnRight > 1;
  const rightPart = [];

  // Handle left part of the paginator ( < 1 ... 4 5)
  var i;
  if (hasLeftEllipsis) {
    i = currentPage - maxNeighbours;
    leftPart.push(<Pagination.Item key={"page1"}>1</Pagination.Item>);
    leftPart.push(<Pagination.Ellipsis key={"ellipsis1"} />);
  } else {
    i = currentPage - maxNeighbours - itemsSkippedOnLeft - 1;
  }
  while (i < currentPage) {
    leftPart.push(<Pagination.Item key={"page" + i}>{i}</Pagination.Item>);
    i++;
  }

  // Handle right part of the paginator ( 6 7 ... 10 > )
  var j = currentPage + 1;
  while (
    j < currentPage + maxNeighbours + 1 ||
    (!hasRightEllipsis && j <= lastPage)
  ) {
    rightPart.push(<Pagination.Item key={"page" + j}>{j}</Pagination.Item>);
    j++;
  }
  if (hasRightEllipsis) {
    rightPart.push(<Pagination.Ellipsis key={"ellipsis2"} />);
    rightPart.push(
      <Pagination.Item key={"page" + lastPage}>{lastPage}</Pagination.Item>
    );
  }
  return (
    <Pagination>
      <Pagination.Item disabled={currentPage === 1} className="arrow">
        {"<"}
      </Pagination.Item>
      {leftPart}
      <Pagination.Item active>{currentPage}</Pagination.Item>
      {rightPart}
      <Pagination.Item disabled={currentPage === lastPage} className="arrow">
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
  {}
)(Paginator);
