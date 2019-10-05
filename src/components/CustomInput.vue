<template>
    <div class="group">      
        <input type="text" :required="isRequired">
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>{{ name }}</label>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    props: {
        name: {
            type: String,
            required: true
        },
        isRequired: {
            type: Boolean,
            required: false,
            default: () => true
        }
    }
}
</script>

<style scoped>
    .group { 
        position: relative; 
        margin-bottom: 25px; 
        font-family: Source Sans Pro;
        font-style: normal;
        font-weight: normal;
    }

    input {
        font-size: 16px;
        line-height: 20px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 300px;
        border: none;
        border-bottom: 1px solid #222222;
        background-color: #F7FAFA;
    }

    input:focus {
        outline: none; 
    }

    label {
        color: #222222; 
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 0.2s ease all; 
        -moz-transition: 0.2s ease all; 
        -webkit-transition: 0.2s ease all;
    }

    input:focus ~ label, input:valid ~ label 		{
        top: -5px;
        font-size: 12px;
        color: #00B098;
    }

    .bar {
        position: relative; 
        display: block; 
        width: 300px;
    }

    .bar:before, 
    .bar:after {
        content: '';
        height: 2px; 
        width: 0;
        bottom: 1px; 
        position: absolute;
        background: #00B098; 
        transition: 0.2s ease all; 
        -moz-transition: 0.2s ease all; 
        -webkit-transition: 0.2s ease all;
    }

    .bar:before {
        left: 50%;
    }

    .bar:after {
        right: 50%; 
    }

    input:focus ~ .bar:before{
        width: 55%;
    } 
    
    input:focus ~ .bar:after {
        width: 50%;
    }

    .highlight {
        position: absolute;
        height: 60%; 
        width: 100px; 
        top: 25%; 
        left: 0;
        pointer-events: none;
        opacity: 0.5;
    }

    input:focus ~ .highlight {
        -webkit-animation: inputHighlighter 0.3s ease;
        -moz-animation: inputHighlighter 0.3s ease;
        animation: inputHighlighter 0.3s ease;
    }

    @-webkit-keyframes inputHighlighter {
        from { 
            background:#00B098; 
        } to { 
            width:0; background:transparent; 
        }
    }

    @-moz-keyframes inputHighlighter {
        from { 
            background:#00B098; 
        } to { 
            width:0; background:transparent; 
        }
    }

    @keyframes inputHighlighter {
        from {
            background:#00B098; 
        } to {
            width:0; 
            background:transparent;
        }
    }
</style>