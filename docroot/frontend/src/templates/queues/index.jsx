import React from "react";
import Layout from '../../components/Layout';
import config from "../../assets/config";
import { version, dependencies } from '../../../package.json';
import UUIDFetcher from "../../components/formcomponent/UUIDFetcher";

const Queues = () => (
    <Layout title="Queues">
        <div className={`dc-page ${config.container}`}>
            <h1>Queues this site</h1>
            <div className="dc-page-content row">
                <div className="col-md-9 col-sm-12">
                    <UUIDFetcher />
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

export default Queues;
