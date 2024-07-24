import React from "react";
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";
import { version, dependencies } from '../../../package.json';

const Moderator = () => (
    <Layout title="Moderate">
        <div className={`dc-page ${config.container}`}>
            <h1>Moderate Heritage Graph</h1>
            <div className="dc-page-content row">
 
            </div>
            <br/>
            <br/>

            <div className="dc-page-content row">
                <div className="col-12">
                    {/* <p>data-catalog-app: {version}</p>
                    <p>data-catalog-components: {dependencies["@civicactions/data-catalog-components"]}</p> */}
                </div>  
            </div>
        </div>
    </Layout>
);

export default Moderator;