<template>
    <div class="group">
        <input 
            v-if="!selectOptions.length"
            v-model="inputValue"
            :class="{ 'not-empty': inputValue }" 
            :type="inputType" 
            :required="isRequired"
        >
        <select
            v-else
            v-model="selectValue"
            :class="{ 'not-empty': selectValue }" 
        >
            <option 
                v-for="option in selectOptions" 
                :key="option.name" 
                :value="option.value" 
                :attr="option.attributes"
            >{{ option.name }}</option>
        </select>
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>{{ name }}</label>
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    data() {
        return {
            inputValue: '',
            selectValue: ''
        }
    },
    props: {
        name: {
            type: String,
            required: true
        },
        isRequired: {
            type: Boolean,
            required: false,
            default: () => true
        },
        inputType: {
            type: String,
            required: false,
            default: () => 'text'
        },
        selectOptions: {
            type: Array,
            required: false,
            default: () => []
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

    input,
    select {
        font-size: 16px;
        line-height: 20px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 300px;
        border: none;
        border-bottom: 1px solid #222222;
        background-color: #F7FAFA;
        box-sizing: content-box;
    }

    input:focus,
    select:focus {
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

    input:focus ~ label, 
    select:focus ~ label, 
    input.not-empty ~ label, 
    select.not-empty ~ label {
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

    input:focus ~ .bar:before,
    select:focus ~ .bar:before {
        width: 55%;
    } 
    
    input:focus ~ .bar:after,
    select:focus ~ .bar:after {
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

    input:focus ~ .highlight,
    select:focus ~ .highlight {
        -webkit-animation: inputHighlighter 0.3s ease;
        -moz-animation: inputHighlighter 0.3s ease;
        animation: inputHighlighter 0.3s ease;
    }

    @-webkit-keyframes inputHighlighter {
        from { 
            background: #00B098; 
        } to { 
            width: 0; 
            background: transparent; 
        }
    }

    @-moz-keyframes inputHighlighter {
        from { 
            background: #00B098; 
        } to { 
            width: 0;
            background: transparent; 
        }
    }

    @keyframes inputHighlighter {
        from {
            background: #00B098; 
        } to {
            width: 0; 
            background: transparent;
        }
    }

    ::-webkit-datetime-edit { 
        color: transparent; 
    }
    
    :focus::-webkit-datetime-edit { 
        color: #000; 
    }
</style>