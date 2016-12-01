import React from 'react';
import $ from 'jquery';


class TodoItem extends React.Component {
    render(){
        return (<div><span>{this.props.iname}</span><button onClick={this.props.deleteItem}>X</button></div>);
    }
}


class AddItem extends React.Component {
    render(){
        return (
                <div><input type='text' onChange={this.props.updateNewItem} value={this.props.nItem} />
                <button onClick={this.props.addItem}>add</button></div>
        )
    }
}


class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items:[],source:props.listurl , nItem:""};
        this.addItem = this.addItem.bind(this);
    }

    componentDidMount(){
        this.serverRequest = $.get(this.props.source, function(datas){
            this.setState({items:datas});
        }.bind(this));
    
    }

    deleteItem(index){
        this.setState((prevState,props) => (
            { items: this.state.items.filter( (_,i) => i !== index ) }
        ));
    }

    updateNewItem(e){
        this.setState( 
            { nItem: e.target.value } 
        );
    }
    addItem(){
        this.setState( 
            (prevState,props) => ({ 
                items: prevState.items.concat(prevState.nItem ),
                nItem: ""
            })      
        );
    }

    render(){
        var i = 0;
        let Items = this.state.items.map( (e) => { 
            const eb = this.deleteItem.bind(this,i);

            return <TodoItem key={i++} iname={e} deleteItem={eb}/> 

        });

        return (<div>{Items}<AddItem nItem={this.state.nItem} addItem={this.addItem} updateNewItem={this.updateNewItem.bind(this)} /></div>);
    }
}


export default Todo;
