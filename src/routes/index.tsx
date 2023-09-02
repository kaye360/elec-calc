import React, { ReactNode } from "react"
import { Link, useNavigate } from "react-router-dom"
import Main from "../layout/Main"

export default function Home() {

	return (
		<Main>

			<div className="grid grid-cols-[repeat(auto-fit,minmax(125px,1fr))] gap-4 font-semibold">

				<Feature href="/metric-imperial-converter" className="text-rose-500 dark:text-rose-300">
					<MetricToImperialConverterIcon />
					Metric to Imperial Conversion
				</Feature>

				<Feature href="/wire" className="text-slate-500 dark:text-slate-300">	
					<WireIcon />
					Wire
				</Feature>

				<Feature href="/conduit" className="text-sky-500 dark:text-sky-300">
					<ConduitIcon />
					Conduit
				</Feature>

				<Feature href="/boxes" className="text-emerald-500 dark:text-emerald-300">
					<BoxIcon />
					Boxes
				</Feature>

				<Feature href="receptacles" className="text-fuchsia-500 dark:text-fuchsia-300">
					<ReceptacleIcon />
					Receptacles
				</Feature>

				<Feature href="/residential" className="text-amber-500 dark:text-amber-300">
					<ResidentialIcon />
					Residential
				</Feature>
				
				<Feature href="/motors" className="text-sky-500 dark:text-sky-200">
					Motors
				</Feature>

				<Feature href="/transformers" className=" text-sky-500 dark:text-sky-200">
					Transformers
				</Feature>

			</div>

		</Main>
	)
}



interface Feature {
	href : string,
	className? : string,
	children : ReactNode
}

function Feature({href, className='', children, ...rest} : Feature) {

	const navigate = useNavigate()

	function delayLink(e : React.MouseEvent<HTMLAnchorElement, MouseEvent>) : void {
		e.preventDefault()
		setTimeout(() => navigate(href), 100 )
	}

	return(
		<Link 
			to={href}
			onClick={ (e) => delayLink(e) }
			className={`border-2 border-sky-200 dark:border-sky-950 hover:bg-sky-200 dark:hover:bg-sky-950 hover:scale-110 active:bg-sky-300 dark:active:bg-sky-800 transition-all grid place-items-center gap-2 h-full p-4 text-center rounded-xl leading-5 min-h-[150px] ${className}`} {...rest}
		>
				{children}
		</Link>
	)
}




/**
 * SVG's for Features
 */
function MetricToImperialConverterIcon() {
	return(
		<svg width="50" height="50" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M29 43.7059V52.5294M16.5 43.7059V56.9412M41.5 43.7059V56.9412M66.5 43.7059V56.9412M54 43.7059V52.5294M4 4V21.6471M4 12.8235H79M79 4V21.6471M74.3125 43.7059C76.9 43.7059 79 45.9647 79 48.7485V73.9574C79 76.7412 76.9 79 74.3125 79H8.16667C7.0616 79 6.00179 78.5352 5.22039 77.7078C4.43899 76.8805 4 75.7583 4 74.5882V48.7485C4 45.9647 6.1 43.7059 8.6875 43.7059H74.3125Z" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	)
}

function WireIcon() {
	return (
		<svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M8.33333 75C7.15278 75 6.1625 74.6 5.3625 73.8C4.5625 73 4.16389 72.0111 4.16667 70.8333V66.6667H0V50C0 48.8194 0.4 47.8292 1.2 47.0292C2 46.2292 2.98889 45.8306 4.16667 45.8333H8.33333V16.6667C8.33333 12.0833 9.96528 8.15973 13.2292 4.89585C16.4931 1.63196 20.4167 1.44175e-05 25 1.44175e-05C29.5833 1.44175e-05 33.5069 1.63196 36.7708 4.89585C40.0347 8.15973 41.6667 12.0833 41.6667 16.6667V58.3333C41.6667 60.625 42.4833 62.5875 44.1167 64.2208C45.75 65.8542 47.7111 66.6694 50 66.6667C52.2917 66.6667 54.2542 65.85 55.8875 64.2167C57.5208 62.5833 58.3361 60.6222 58.3333 58.3333V29.1667H54.1667C52.9861 29.1667 51.9958 28.7667 51.1958 27.9667C50.3958 27.1667 49.9972 26.1778 50 25V8.33335H54.1667V4.16668C54.1667 2.98612 54.5667 1.99585 55.3667 1.19585C56.1667 0.395847 57.1556 -0.00276336 58.3333 1.44175e-05H66.6667C67.8472 1.44175e-05 68.8375 0.400015 69.6375 1.20001C70.4375 2.00001 70.8361 2.9889 70.8333 4.16668V8.33335H75V25C75 26.1806 74.6 27.1708 73.8 27.9708C73 28.7708 72.0111 29.1694 70.8333 29.1667H66.6667V58.3333C66.6667 62.9167 65.0347 66.8403 61.7708 70.1042C58.5069 73.368 54.5833 75 50 75C45.4167 75 41.4931 73.368 38.2292 70.1042C34.9653 66.8403 33.3333 62.9167 33.3333 58.3333V16.6667C33.3333 14.375 32.5167 12.4125 30.8833 10.7792C29.25 9.14584 27.2889 8.33057 25 8.33335C22.7083 8.33335 20.7458 9.15001 19.1125 10.7833C17.4792 12.4167 16.6639 14.3778 16.6667 16.6667V45.8333H20.8333C22.0139 45.8333 23.0042 46.2333 23.8042 47.0333C24.6042 47.8333 25.0028 48.8222 25 50V66.6667H20.8333V70.8333C20.8333 72.0139 20.4333 73.0042 19.6333 73.8042C18.8333 74.6042 17.8444 75.0028 16.6667 75H8.33333Z" fill="currentColor"/>
		</svg>
	)
}

function ConduitIcon() {
	return(
		<svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M75 45H67.5V52.5H45V41.25H52.5V33.75H45V15C45 13.0109 44.2098 11.1032 42.8033 9.6967C41.3968 8.29018 39.4891 7.5 37.5 7.5H7.5V0H0V30H7.5V22.5H30V33.75H22.5V41.25H30V60C30 61.9891 30.7902 63.8968 32.1967 65.3033C33.6032 66.7098 35.5109 67.5 37.5 67.5H67.5V75H75" fill="currentColor"/>
		</svg>
	)
}

function BoxIcon() {
	return (
		<svg width="50" height="50" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M4 20.0607L41.5 4L79 20.0607M4 20.0607L41.5 36.1214M4 20.0607V20.0714M79 20.0607L41.5 36.1214M79 20.0607V62.9286L41.5 79M79 20.0607L41.5 36.1429V79M41.5 36.1214V79M41.5 36.1214L4 20.0714M4 20.0714V62.9286L41.5 79" stroke="currentColor" strokeWidth="7" strokeLinejoin="round"/>
		</svg>
	)
}

function ReceptacleIcon() {
	return (
		<svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M62.5 4.6875C62.5 3.4443 61.8415 2.25201 60.6694 1.37294C59.4973 0.49386 57.9076 0 56.25 0C54.5924 0 53.0027 0.49386 51.8306 1.37294C50.6585 2.25201 50 3.4443 50 4.6875V18.75H62.5V4.6875ZM71.875 23.4375H3.125C2.2962 23.4375 1.50134 23.6844 0.915291 24.124C0.32924 24.5635 0 25.1596 0 25.7812L0 30.4688C0 31.0904 0.32924 31.6865 0.915291 32.126C1.50134 32.5656 2.2962 32.8125 3.125 32.8125H6.25V37.5C6.2511 42.9025 8.73966 48.1391 13.2949 52.3242C17.8502 56.5094 24.1927 59.3863 31.25 60.4687V75H43.75V60.4687C50.8073 59.3863 57.1498 56.5094 61.7051 52.3242C66.2603 48.1391 68.7489 42.9025 68.75 37.5V32.8125H71.875C72.7038 32.8125 73.4987 32.5656 74.0847 32.126C74.6708 31.6865 75 31.0904 75 30.4688V25.7812C75 25.1596 74.6708 24.5635 74.0847 24.124C73.4987 23.6844 72.7038 23.4375 71.875 23.4375ZM25 4.6875C25 3.4443 24.3415 2.25201 23.1694 1.37294C21.9973 0.49386 20.4076 0 18.75 0C17.0924 0 15.5027 0.49386 14.3306 1.37294C13.1585 2.25201 12.5 3.4443 12.5 4.6875V18.75H25V4.6875Z" fill="currentColor"/>
		</svg>
	)
}

function ResidentialIcon() {
	return (
		<svg width="50" height="50" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M72.585 29.1521L42.6038 1.93897L42.5437 1.88489C41.1659 0.672439 39.3659 0 37.4981 0C35.6304 0 33.8304 0.672439 32.4525 1.88489L32.3888 1.93897L2.415 29.1521C1.65488 29.8283 1.04806 30.6481 0.632519 31.5601C0.216976 32.4722 0.00164562 33.4569 0 34.4526V67.7884C0 69.701 0.790176 71.5353 2.1967 72.8878C3.60322 74.2402 5.51088 75 7.5 75H25.5C27.4891 75 29.3968 74.2402 30.8033 72.8878C32.2098 71.5353 33 69.701 33 67.7884V51.9228H42V67.7884C42 69.701 42.7902 71.5353 44.1967 72.8878C45.6032 74.2402 47.5109 75 49.5 75H67.5C69.4891 75 71.3968 74.2402 72.8033 72.8878C74.2098 71.5353 75 69.701 75 67.7884V34.4526C74.9984 33.4569 74.783 32.4722 74.3675 31.5601C73.9519 30.6481 73.3451 29.8283 72.585 29.1521ZM66 66.346H51V50.4805C51 49.5334 50.806 48.5956 50.4291 47.7207C50.0522 46.8457 49.4997 46.0507 48.8033 45.3811C48.1069 44.7114 47.2801 44.1802 46.3701 43.8178C45.4602 43.4554 44.4849 43.2688 43.5 43.2688H31.5C29.5109 43.2688 27.6032 44.0286 26.1967 45.3811C24.7902 46.7335 24 48.5678 24 50.4805V66.346H9V35.0764L37.5 9.20469L66 35.0764V66.346Z" fill="currentColor"/>
		</svg>
	)
}