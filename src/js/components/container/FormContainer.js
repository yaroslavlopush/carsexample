import React, { Component } from "react";
import GetMediumPrice from "../../api/GetMediumPrice.js";
import CreateBrandSelectHooks from "../../api/createBrandSelectHooks.js";
import CreateModelSelect from "../../api/createModelSelectHooks.js";
import ShowAppTheme from "../smallComponents/showAppTheme.js";
import ChangeTheme from "../smallComponents/changeTheme.js";

class FormContainer extends Component {
  constructor() {
    super();
    
  }

  render() {
    return (
      <div>
        <ShowAppTheme/>
        <ChangeTheme/>
        <div className="mt-3" >
          <CreateBrandSelectHooks/>
        </div>
        <div className="mt-3" >
          <CreateModelSelect/>
        </div>
        <div className="mt-3">
          <GetMediumPrice/>
        </div>
    </div>

    );
  }
}
export default FormContainer;