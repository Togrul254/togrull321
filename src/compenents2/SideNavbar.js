import React from 'react'


 class SideNavbar extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
       openMenuToggle:false
     }
   }
   openMenuToggle(){
     this.setState({
       openMenuToggle:!this.state.openMenuToggle
     })
   }
   
    render() {
        let sideNavOpen = 'side-nav';
        let togButton = 'nav__toggle-button';
         let togLine = 'nav__line';
         let list_style = 'menu_';
        if (this.props.show) {
            sideNavOpen = 'side-nav open';
            togButton = 'nav__toggle-button openThis';
            togLine = 'nav__line openThis';
            list_style = 'menu_ menuOpen';
        }
        let p2 ='p2';
        let menuAlpha = 'menuAlpha';
        if(this.state.openMenuToggle){
          p2 = 'p2 p2Open';
             menuAlpha = 'menuAlpha alphaOpen'
         }
       
        return (
            <div>
            <div className={sideNavOpen}
            
            >
                <div className='toggle'>
                
               
                <button className={togButton}
                    onClick={this.props.buttonOnline}
                    >
                      <div className={togLine}></div>
                      <div className={togLine}></div>
                      <div className={togLine}></div>
                    </button>
                   
                     </div>
              
                  <div className={list_style}>
                    <div className="menu_child" onClick={()=>this.openMenuTog()}>
                      <div className="main_menu">
                      <img src="slide1.jpg"/>
                        <p>Dashboard</p>
                        <p className={p2}></p>
                      </div>
                    </div>
                    {this.state.openMenuToggle &&
                    <div className="openMenuTog">
                    <ul>
                      <li>Home</li>
                      <li>Home</li>
                    </ul>
                    </div>
                    }
                    <div className="menu_child">
                      <div className="main_menu">
                      <img src="slide1.jpg"/>
                        <p>Example</p>
                      </div>
                    </div>
                    <div className="menu_child">
                      <div className="main_menu">
                      <img src="slide1.jpg"/>
                        <p>Prodocts</p>
                      </div>
                    </div>

                  </div>
              </div>
            </div>
          
       
        );
    }
}
export default SideNavbar;