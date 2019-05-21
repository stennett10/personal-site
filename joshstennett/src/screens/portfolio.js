import React, {Component} from 'react'
import Breakpoint from 'react-socks';
import SiteHeader from '../components/siteheader'
class Home extends Component{

    render(){
        return(<>
            <SiteHeader />
            <div>Welcome to my website.</div>
            </>
        )
    }
}

export default Home;