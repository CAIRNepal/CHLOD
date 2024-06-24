import React from "react";
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";

const FormComingSoon = () => (
    <Layout title="Form Coming Soon">
        <div className={`dc-page ${config.container}`}>
            <h1>Form Coming Soon</h1>
            <div className="dc-page-content row">
                <div className="col-12">
                    <Announcement variation="warning" heading="Form Coming Soon">
                        <p>The form is under development and will be available soon. Stay tuned!</p>
                    </Announcement>
                </div>
            </div>
        </div>
    </Layout>
);

export default FormComingSoon;
