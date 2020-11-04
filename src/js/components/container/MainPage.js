import React, { Component } from "react";
import GetMediumPrice from "../automobile/GetMediumPrice.js";
import CreateBrandSelectHooks from "../automobile/CreateBrandSelectHooks.js";
import CreateModelSelect from "../automobile/CreateModelSelectHooks.js";
import ShowAppTheme from "../theme/showTheme.js";
import ChangeTheme from "../theme/changeTheme.js";

class mainPage extends Component {
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
export default mainPage;