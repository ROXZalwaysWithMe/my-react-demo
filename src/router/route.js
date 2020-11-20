import React from 'react'
import { Redirect } from 'react-router-dom'
import Home from "../Pages/Home";
import Layout from "../Layout";
import FormPage from "../Pages/FormPage";
import TablePage from "../Pages/TablePage";

export default [
	{
		path: "/",
		component: Layout,
		children: [
			{
				path: "/",
				exact: true,
				render: () => (
					<Redirect to="/home" />
				)
			},
			{
				name: 'Home',
				path: "/home",
				component: Home,
			},
			{
				name: 'Table',
				path: "/table",
				component: TablePage,
			},
			{
				name: 'Form',
				path: "/form",
				component: FormPage,
			},
		],
	},
];
