import PropTypes from 'prop-types';
import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

export default class Pages extends React.PureComponent {

  static propTypes = {
      current: PropTypes.number.isRequired,
      pages: PropTypes.number.isRequired,
      pagesToDisplay: PropTypes.number.isRequired,
      updatePage: PropTypes.func.isRequired
  };

  pageRange() {
      const currentPosition = Math.ceil(this.props.pagesToDisplay / 2);
      const start = this.props.current < currentPosition ? 1
          : this.props.current - currentPosition + 1;
      const len = this.props.pages < start + this.props.pagesToDisplay - 1
          ? this.props.pages - start + 1 : this.props.pagesToDisplay;
      return Array
          .apply(null, Array(len))
          .map((u, i) => start + i);
  }

  render() {
      const {updatePage, current, pages} = this.props;
      const updatePageWrapper = (num) => {
          return (e) => {
              e.preventDefault();
              updatePage(num);
          };
      };

      return (
          <Pagination aria-label="Page navigation example">
              {current !== 1 && <PaginationItem>
                  <PaginationLink first onClick={updatePageWrapper(1)} />
              </PaginationItem>}
              {current > 1 && <PaginationItem>
                  <PaginationLink previous onClick={updatePageWrapper(current-1)} />
              </PaginationItem>}
              {this.pageRange().map((page) => {
                  const isCurrent = current == page;
                  return (
                      <PaginationItem key={page} active={isCurrent}>
                          <PaginationLink onClick={updatePageWrapper(page)}>
                              {page}
                          </PaginationLink>
                      </PaginationItem>
                  );
              })}
              {current !== pages && <PaginationItem>
                  <PaginationLink next onClick={updatePageWrapper(current + 1)} />
              </PaginationItem>}
              {current !== pages && <PaginationItem>
                  <PaginationLink last onClick={updatePageWrapper(pages)} />
              </PaginationItem>}
          </Pagination>
      );
  }
}
