import React, { Component } from 'react';
import './MessageBox.css'

export class MessageBox extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        info: [
            {
                name: "Dipendra",
                id:1
            },
            {
                name: "Poshan",
                id:2
            }
        ],
        messages:[
            {
                id:1,
                content: "Hello world"
            },
            {
                id: 2,
                content: "Hello world"
            },
            {
                id:4,
                content: "Hello world"
            },
            {
                id:5,
                content: "Hello world"
            },
            {
                id:6,
                content: "Hello world"
            },
            {
                id:7,
                content: "Hello world khana khayeu ani k gardai chhau ta"
            },
            {
                id:8,
                content: "Hello world khana khayeu ani k gardai chhau ta"
            },
            {
                id:9,
                content: "Hello world khana khayeu ani k gardai chhau ta"
            },
            {
                id:10,
                content: "Hello world khana khayeu ani k gardai chhau ta"
            },
            {
                id:11,
                content: "Hello world khana khayeu ani k gardai chhau ta"
            },
            {
                id:12,
                content: "Hello world khana khayeu ani k gardai chhau ta"
            },
        ]
      }

      this.viewRef = React.createRef();

    }

    componentDidMount(){
        this.viewRef.current.scrollIntoView({behaviour:'smooth'});
    }

  render() {
    return (
      <div className='message-box'>
        {
            this.state.messages.map(info=>{
                return <div key={info.id} className={(info.id%2==0)?'message-even':'message-odd'}>{info.content}</div>
            })
        }
        <div className="dummy" ref={this.viewRef}></div>
      </div>
    )
  }
}

export default MessageBox