import React, { Component } from 'react';
import api from '../../services/api';
import './New.css';

class New extends Component {
    
    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    };

    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData()
        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);

        await api.post('posts', data);

        this.props.history.push('/');
    }

    handleImageChange = e => {
        this.setState({ image: e.target.files[0] });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render () {
        return (
            <form id="new-post">
                <input type="file" onChange={this.handleChangeImage}/>
                
                <label>
                    Author
                    <input 
                        type="text"
                        name="author"
                        placeholder="Author of the post" 
                        onChange={this.handleChange}
                        value={this.state.author}
                    />
                </label>
                
                <label>
                    Place
                    <input 
                        type="text" 
                        name="place"
                        placeholder="Place of the post" 
                        onChange={this.handleChange}
                        value={this.state.place}
                    />
                </label>
                
                <label>
                    Description
                    <input 
                        type="text" 
                        name="description"
                        placeholder="Description of the post" 
                        onChange={this.handleChange}
                        value={this.state.description}
                    />
                </label>
                
                <label>
                    Hashtags
                    <input 
                        type="text"
                        name="hashtags"
                        placeholder="Hashtags of the post"
                        onChange={this.handleChange}
                        value={this.state.hashtags}
                    />
                </label>
    
                <button type="submit">Send</button>
            </form>
        )
    }
}

export default New;