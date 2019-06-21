<template>
    <a-form 
        :form="form"
        @submit="handleSubmit"
    >   
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
        <a-form-item v-bind="formItemLayout" label="名称">
            <a-input 
                v-decorator="[
                    'name',
                    {
                        rules: [{
                            required: true, message: '请输入名称！'
                        }]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="区划">
            <a-input
                v-decorator="[
                    'regionCode',
                    {
                        rules: [{
                            required: true, message: '请输入区划！'
                        }]
                    }
                ]"
            >
            </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="部门代码">
            <a-input
                v-decorator="[
                    'code',
                    {
                        rules: [{
                            required: true, message: '请输入部门代码！'
                        }]
                    }
                ]"
            >
            </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="地址">
            <a-input
                v-decorator="[
                    'address',
                    {
                        rules: [{
                            required: true, message: '请输入地址！'
                        }]
                    }
                ]"
            >
            </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="电话">
            <a-input
                v-decorator="[
                    'phone',
                    {
                        rules: [{
                            required: true, message: '请输入地址！'
                        }]
                    }
                ]"
            >
            </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="经度">
            <a-input
                v-decorator="[
                    'longitude',
                    {
                        rules: [{
                            required: true, message: '请输入经度！'
                        }]
                    }
                ]"
            >
            </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="纬度">
            <a-input
                v-decorator="[
                    'latitude',
                    {
                        rules: [{
                            required: true, message: '请输入纬度！'
                        }]
                    }
                ]"
            >
            </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="备注">
            <a-input
                v-decorator="[
                    'remarks',
                    {
                        rules: [{
                            required: false, message: '请输入纬度！'
                        }], initialValue: ''
                    }
                ]"
            >
            </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="排序">
            <a-input
                v-decorator="[
                    'sort',
                    {
                        rules: [{
                            required: false, message: ''
                        }],initialValue: '10'
                    }
                ]"
            >
            </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
            <a-button type="primary" html-type="submit">添加</a-button>
        </a-form-item>
    </a-form>

</template>

<script>
import { 
  Form,
  Input,
  Select
 } from 'ant-design-vue' 
 const FormItem=Form.Item

    export default {
        name: 'CreateFormv2',
        components:{
            AForm: Form,
            AFormItem: Form.Item,
            ASelect: Select,
            'a-select-option': Select.Option
        },
        data() {
            return {
                checkedNames: [],
                formItemLayout: {
                    labelCol: {
                    xs: { span: 24 },
                    sm: { span: 8 },
                    },
                    wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 16 },
                    },
                },
                form: this.$form.createForm(this)
            }
        },
        beforeCreate () {
            this.form = this.$form.createForm(this);
        },
        methods:{
            handleSubmit(e){
                e.preventDefault();
                this.form.validateFields((err, values) => {
                    if(!err){
                        console.log('Received values of form: ', values);
                        this.$emit('create', values)
                    }
                })
            }
        }
    }
</script>

<style>

</style>