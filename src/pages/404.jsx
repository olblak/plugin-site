import React from 'react';
import {Link} from 'gatsby';
import Layout from '../layout';

const NotFound = () => (
    <Layout>
        <div className="not-found-box">
            <div className="not-found">
                <i className="icon-plug" />
                <i className="icon-ban" />
                <h3>Plugin page not found</h3>
                <p>
We are sorry but the page you are looking for does not exist.
                    <br />
                    <Link to="/">Search again</Link>
?
                </p>
            </div>
        </div>
    </Layout>
);
export default NotFound;
