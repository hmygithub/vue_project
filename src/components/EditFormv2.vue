<template>
    <a-form 
        :form="form"
        @submit="handleSubmit"
    >   
    
        <a-form-item v-bind="formItemLayout" label="名称">
            <a-input 
                v-decorator="[
                    'name',
                    {
                        rules: [{
                            required: true, message: '请输入名称！'
                        }], initialValue: record.name
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
                        }], initialValue: record.regionCode
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
                        }], initialValue: record.code
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
                        }], initialValue: record.address
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
                            required: false, message: ''
                        }], initialValue: record.phone
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
                        }], initialValue: record.longitude
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
                        }], initialValue: record.latitude
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
                            required: false, message: ''
                        }], initialValue: record.remarks
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
                        }], initialValue: record.sort
                    }
                ]"
            >
            </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout">
            <a-button type="primary" html-type="submit">更新</a-button>
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
        name: 'EditFormv2',
        components:{
            AForm: Form,
            AFormItem: Form.Item
        },
        props:['record'],
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
                form: this.$form.createForm(this,(props)=>({...record}))
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
                        this.$emit('update', values)
                    }
                })
            }
        }
    }
</script>

<style>

</style>