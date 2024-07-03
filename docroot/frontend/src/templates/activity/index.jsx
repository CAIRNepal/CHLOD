import React from "react";
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";
import { version, dependencies } from '../../../package.json';

const Activity = () => (
    <Layout title="Activity">
        <div className={`dc-page ${config.container}`}>
            <h1>Activity</h1>
            <div className="dc-page-content row">
                <div className="col-md-9 col-sm-12">
                    <p>This is the Activity component.</p>
                    <p>
                    This component displays information about the activity on the site.
                    </p>
                </div>
                <div className="col-md-3 col-sm-12">
                    <Announcement variation="info" heading="Note">
                    <p>Update this activity page before publishing.</p>
                    </Announcement>
                </div>
            </div>
            <h2>App version:</h2>
            <div className="dc-page-content row">
                <div className="col-12">
                    <p>data-catalog-app: {version}</p>
                    <p>data-catalog-components: {dependencies["@civicactions/data-catalog-components"]}</p>
                </div>  
            </div>
        </div>
    </Layout>
);

export default Activity;