/**
 * Created by lk on 18/4/28.
 */

import Mock from 'mockjs'

import login from './login'
import admin from './admin'
import authRule from './authRule'
import role from './role'
// 登录相关
Mock.mock(/\/admin\/login\/index/, 'post', login.index)
Mock.mock(/\/admin\/login\/userInfo/, 'get', login.userInfo)
// 管理员相关
Mock.mock(/\/admin\/admin\/index/, 'get', admin.index)
Mock.mock(/\/admin\/admin\/save/, 'post', admin.save)
Mock.mock(/\/admin\/admin\/edit/, 'post', admin.edit)
Mock.mock(/\/admin\/admin\/delete/, 'post', admin.del)
// 权限相关
Mock.mock(/\/admin\/auth_rule\/index/, 'get', authRule.index)
Mock.mock(/\/admin\/auth_rule\/save/, 'post', authRule.save)
Mock.mock(/\/admin\/auth_rule\/edit/, 'post', authRule.edit)
Mock.mock(/\/admin\/auth_rule\/delete/, 'post', authRule.del)
// 角色相关
Mock.mock(/\/admin\/role\/index/, 'get', role.index)
Mock.mock(/\/admin\/role\/save/, 'post', role.save)
Mock.mock(/\/admin\/role\/edit/, 'post', role.edit)
Mock.mock(/\/admin\/role\/delete/, 'post', role.del)
Mock.mock(/\/admin\/role\/auth/, 'post', role.auth)

export default Mock
