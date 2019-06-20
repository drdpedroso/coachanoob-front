import React from 'react'
import PropTypes from 'prop-types';
import {Pagination} from 'semantic-ui-react'

const BasePagination = (props) => {
    return (
        <Pagination defaultActivePage={props.defaultActivePage} totalPages={props.totalPages}
                    onPageChange={props.onPageChange}/>
    )
};

BasePagination.propTypes = {
    defaultActivePage: PropTypes.number,
    totalPages: PropTypes.number,
    onPageChange: PropTypes.func
};

export default BasePagination
