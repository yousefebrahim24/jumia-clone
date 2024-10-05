
import React from "react";

export default function LoadingIcon(){
    return(
      <div className="container m-auto" style={{minHeight:'50vh'}}>
        <h1 className="fs-1 text-center my-5 py-5 text-dark">
            <i className="fa fa-spinner fa-spin fs-1" id="loadingIcon"></i>
        </h1>
      </div>
    )
}
