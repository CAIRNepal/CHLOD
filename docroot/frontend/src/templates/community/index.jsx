import React from "react";
import { Announcement } from "@civicactions/data-catalog-components";
import Layout from '../../components/Layout';
import config from "../../assets/config";

const Community = () => (
    <Layout title="Community">
        <div className={`dc-page ${config.container}`}>
            <h1>Community</h1>
            <div className="dc-page-content row">
                <div className="col-md-9 col-sm-12">
                    <p>Welcome to the Community page.</p>
                    <p>
                    Here you can find resources and information about how to contribute to our
                    data catalog and participate in the community.
                    </p>
                    <h2>Community Guidelines</h2>
                    <p>
                    Our community is dedicated to creating an inclusive and collaborative environment. 
                    Please read our community guidelines to understand how you can participate and contribute.
                    </p>
                </div>
                <div className="col-md-3 col-sm-12">
                    <Announcement variation="info" heading="Note">
                    <p>Stay updated with the latest community news and events.</p>
                    </Announcement>
                </div>
            </div>
        </div>
    </Layout>
);

export default Community;
