<template>
    <a-form 
        :form="form"
        @submit="handleSubmit"
    >
        <a-form-item v-bind="formItemLayout" label="姓名">
            <a-input 
                v-decorator="[
                    'name',
                    {
                        rules: [{
                            required: true, message: '请输入姓名！'
                        }]
                    }
                ]"
            />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="薪资">
            <a-input
                v-decorator="[
                    'money',
                    {
                        rules: [{
                            required: true, message: '请输入薪资！'
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
        <a-form-item v-bind="formItemLayout">
            <a-button type="primary" html-type="submit">添加</a-button>
        </a-form-item>
    </a-form>

</template>

<script>
import { 
  Form,
  Input
 } from 'ant-design-vue' 
 const FormItem=Form.Item

    export default {
        name: 'CreateForm',
        components:{
            AForm: Form,
            AFormItem: Form.Item
        },
        data() {
            return {
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