
import { Placeholder } from "react-bootstrap";
import React from "react";

function Loading() {
    const imgStyle = {
        height: "100%"
    }
    return (
        <div class="card" aria-hidden="true">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect></svg>

            <div class="card-body">
                <div class="h5 card-title placeholder-glow">
                <span class="placeholder col-6"></span>
                </div>
                <p class="card-text placeholder-glow">
                <span class="placeholder col-7"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-4"></span>
                <span class="placeholder col-6"></span>
                <span class="placeholder col-8"></span>
                </p>
                <div className="d-flex justify-content-between">
                    <Placeholder.Button size="sm" variant="primary" xs={4} />
                    <Placeholder.Button size="sm" variant="success" xs={4} />
                </div>
            </div>
        </div>
    );
}

export default Loading;