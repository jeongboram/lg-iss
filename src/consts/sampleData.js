import { CHART_COLORS } from '../components/charts/ChartConsts';
import { ROWHEADER_TYPE } from '../consts/IssConsts';

export const sampledata = {
	sample_data: {
		title: 'Sample Title',
		existTooltip: true,
		tooltip: 'Sample tooltip message..!!',
		header: ['head1', 'head2', 'head3', 'head4', 'head5', 'head6'],
		cellStyle: [ROWHEADER_TYPE.FIRST, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL],
		cellWidth: ['50%', '10%', '10%', '10%', '10%'],
		rowdata: [
			{ row: ['Frozen yoghurt', 159, 6.0, 24, 4.0, 1] },
			{ row: ['Ice cream sandwich', 237, 9.0, 37, 4.3, 1] },
			{ row: ['Eclair', 262, 16.0, 24, 6.0, 1] },
			{ row: ['Cupcake', 305, 3.7, 67, 4.3, 1] },
			{ row: ['Gingerbread', 356, 16.0, 49, 3.9, 1] },
			{ row: ['Frozen yoghurt2', 159, 6.0, 24, 4.0, 1] },
			{ row: ['Ice cream sandwich2', 237, 9.0, 37, 4.3, 1] },
			{ row: ['Eclair2', 262, 16.0, 24, 6.0, 1] },
			{ row: ['Cupcake2', 305, 3.7, 67, 4.3, 1] },
			{ row: ['Gingerbread2', 356, 16.0, 49, 3.9, 1] },
		],
		
	},
	sample_notitle_data: {
		existTooltip: false,
		tooltip: '',
		header: ['head1', 'head2', 'head3', 'head4', 'head5', 'head6'],
		cellStyle: [ROWHEADER_TYPE.FIRST, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL],
		cellWidth: ['50%', '10%', '10%', '10%', '10%'],
		rowdata: [
			{ row: ['Frozen yoghurt', 159, 6.0, 24, 4.0, 1] },
			{ row: ['Ice cream sandwich', 237, 9.0, 37, 4.3, 1] },
			{ row: ['Eclair', 262, 16.0, 24, 6.0, 1] },
			{ row: ['Cupcake', 305, 3.7, 67, 4.3, 1] },
			{ row: ['Gingerbread', 356, 16.0, 49, 3.9, 1] },
			{ row: ['Frozen yoghurt2', 159, 6.0, 24, 4.0, 1] },
			{ row: ['Ice cream sandwich2', 237, 9.0, 37, 4.3, 1] },
			{ row: ['Eclair2', 262, 16.0, 24, 6.0, 1] },
			{ row: ['Cupcake2', 305, 3.7, 67, 4.3, 1] },
			{ row: ['Gingerbread2', 356, 16.0, 49, 3.9, 1] },
		],
		
	},
}

export const dashboard_service_data = {
	data_aic_us: {
		title: 'AIC(US)',
		sum: 2107,
		datasets: [
			{
				label: 'AIC(US)',
				data: [12, 19, 3, 5, 2], //100분률 환상으로 표기 또는 데이터로 표기
				backgroundColor: [CHART_COLORS.PURPLE, CHART_COLORS.PINK, CHART_COLORS.MINT, CHART_COLORS.BLUE, CHART_COLORS.ORANGE],
				borderWidth: 0,
				borderRadius: 2,
				cutout: '80%',
			},
		],
	},
	data_eic_eu: {
		title: 'EIC(EU)',
		sum: 4,
		datasets: [
			{
				label: 'EIC(EU)',
				data: [100], //100분률 환상으로 표기 또는 데이터로 표기
				backgroundColor: [CHART_COLORS.ORANGE],
				borderWidth: 0,
				borderRadius: 0,
				cutout: '80%',
			},
		],
	},
	data_kic_br: {
		title: 'KIC(BR)',
		sum: 2,
		datasets: [
			{
				label: 'KIC(BR)',
				data: [50, 30, 20], //100분률 환상으로 표기 또는 데이터로 표기
				backgroundColor: [CHART_COLORS.PURPLE, CHART_COLORS.BLUE, CHART_COLORS.ORANGE],
				borderWidth: 0,
				borderRadius: 0,
				cutout: '80%',
			},
		],
	},
	data_eic_ja: {
		title: 'EIC(JA)',
		sum: 0,
		datasets: [
			{
				label: 'EIC(JA)',
				data: [100], //100분률 환상으로 표기 또는 데이터로 표기
				backgroundColor: [CHART_COLORS.GRAY],
				borderWidth: 0,
				borderRadius: 0,
				cutout: '80%',
			},
		],
	},
	data_kic_aj: {
		title: 'KIC(JA)',
		sum: 15215,
		datasets: [
			{
				label: 'KIC(AJ)',
				data: [40, 30, 30], //100분률 환상으로 표기 또는 데이터로 표기
				backgroundColor: [CHART_COLORS.PURPLE, CHART_COLORS.PINK, CHART_COLORS.MINT],
				borderWidth: 0,
				borderRadius: 0,
				cutout: '80%',
			},
		],
	},
	data_kic_kr: {
		title: 'KIC(KR)',
		sum: 21,
		datasets: [
			{
				label: 'KIC(KR)',
				data: [35, 65], //100분률 환상으로 표기 또는 데이터로 표기
				backgroundColor: [CHART_COLORS.GRAY, CHART_COLORS.BLUE],
				borderWidth: 0,
				borderRadius: 0,
				cutout: '80%',
			},
		],
	},
};

export const dashboard_service_tabledata = {
	lg_channels_app_issues: {
		title: 'LG Channles App Issues',
		existTooltip: true,
		tooltip: 'LG Channles App Issues tooltip message..!!',
		header: ['Date', 'Country', 'Platform', 'Isssule Contents'],
		cellWidth: ['20%', '10%', '10%', '60%'],
		cellStyle: [ROWHEADER_TYPE.FIRST, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.LONG],
		rowdata: [
			{ row: ['23-07-07', 1, 11, 'App Service not available App Service not available App Service not available App Service not available'] },
			{ row: ['23-07-07', 5, 11, 'Schedule Error Schedule Error Schedule Error Schedule Error Schedule Error Schedule Error '] },
			{ row: ['23-07-07', 6, 11, 'Not Playable Not Playable Not Playable Not Playable Not Playable Not Playable'] },
			{ row: ['23-07-07', 832, 11, 'App Sevice not available'] },
			{ row: ['23-07-07', 42, 12, 'Schedule Error Schedule Error Schedule Error Schedule Error Schedule Error Schedule Error '] },
			{ row: ['23-07-07', 42, 12, 'Not Playable Not Playable Not Playable Not Playable Not Playable Not Playable'] },
			{ row: ['23-07-07', 42, 12, 'App Service not available App Service not available App Service not available App Service not available'] },
		],
		
	},

	palyback_issue: {
		title: 'Playback Issuess',
		existTooltip: true,
		tooltip: 'Playback Issues tooltip message..!!',
		header: ['Date', 'Country', 'Platform', 'Isssule Contents'],
		cellStyle: [ROWHEADER_TYPE.FIRST, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.LONG],
		cellWidth: ['20%', '10%', '10%', '60%'],
		rowdata: [
			{ row: ['23-07-07', 1, 11, 'App Service not available App Service not available App Service not available App Service not available'] },
			{ row: ['23-07-07', 5, 11, 'Schedule Error Schedule Error Schedule Error Schedule Error Schedule Error Schedule Error '] },
			{ row: ['23-07-07', 6, 11, 'Not Playable Not Playable Not Playable Not Playable Not Playable Not Playable'] },
			{ row: ['23-07-07', 832, 11, 'App Sevice not available'] },
			{ row: ['23-07-07', 42, 12, 'Schedule Error Schedule Error Schedule Error Schedule Error Schedule Error Schedule Error '] },
			{ row: ['23-07-07', 42, 12, 'Not Playable Not Playable Not Playable Not Playable Not Playable Not Playable'] },
			{ row: ['23-07-07', 42, 12, 'App Service not available App Service not available App Service not available App Service not available'] },
		],
	},

	image_issue: {
		title: 'Image Issuess',
		existTooltip: true,
		tooltip: 'Image Issues tooltip message..!!',
		header: ['Date', 'Country', 'Platform', 'CP', 'Ch No. / VOD', 'Issue Contents'],
		cellStyle: [ROWHEADER_TYPE.FIRST, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.LONG, ROWHEADER_TYPE.LONG],
		cellWidth: ['20%', '10%', '10%', '10%', '25%', '25%'],
		rowdata: [
			{ row: ['23-07-07', 151, 99, 'ABCDEF', 'DV8413B DV8413B DV8413B', 'App service not availabledssfgff'] },
			{ row: ['23-07-07', 23, 11, 'ABC', 'DV8413B DV8413B DV8413B', 'Schedule error Schedule errorSchedule error'] },
			{ row: ['23-07-07', 1, 2, 'ABC', 'DV8413B', 'Not playable'] },
			{ row: ['23-07-07', 5, 5, 'GHI', 'DV8413B', 'App service not available'] },
			{ row: ['23-07-07', 5, 5, 'JKL', 'DV8413B', 'Schedule error'] },
			{ row: ['23-07-07', 151, 99, 'ABCDEF', 'DV8413B DV8413B DV8413B', 'App service not availabledssfgff'] },
			{ row: ['23-07-07', 23, 11, 'ABC', 'DV8413B DV8413B DV8413B', 'Schedule error Schedule errorSchedule error'] },
			{ row: ['23-07-07', 1, 2, 'ABC', 'DV8413B', 'Not playable'] },
			{ row: ['23-07-07', 5, 5, 'GHI', 'DV8413B', 'App service not available'] },
			{ row: ['23-07-07', 5, 5, 'JKL', 'DV8413B', 'Schedule error'] },
			{ row: ['23-07-07', 151, 99, 'ABCDEF', 'DV8413B DV8413B DV8413B', 'App service not availabledssfgff'] },
			{ row: ['23-07-07', 23, 11, 'ABC', 'DV8413B DV8413B DV8413B', 'Schedule error Schedule errorSchedule error'] },
			{ row: ['23-07-07', 1, 2, 'ABC', 'DV8413B', 'Not playable'] },
			{ row: ['23-07-07', 5, 5, 'GHI', 'DV8413B', 'App service not available'] },
			{ row: ['23-07-07', 5, 5, 'JKL', 'DV8413B', 'Schedule error'] },
			{ row: ['23-07-07', 151, 99, 'ABCDEF', 'DV8413B DV8413B DV8413B', 'App service not availabledssfgff'] },
			{ row: ['23-07-07', 23, 11, 'ABC', 'DV8413B DV8413B DV8413B', 'Schedule error Schedule errorSchedule error'] },
			{ row: ['23-07-07', 1, 2, 'ABC', 'DV8413B', 'Not playable'] },
			{ row: ['23-07-07', 5, 5, 'GHI', 'DV8413B', 'App service not available'] },
			{ row: ['23-07-07', 5, 5, 'JKL', 'DV8413B', 'Schedule error'] },
		],
	},

	schedule_issues: {
		title: 'Schedule Issues Issuess',
		existTooltip: false,
		tooltip: 'Schedule Issues tooltip message..!!',
		header: ['Date', 'Country', 'Ch No. / Name', 'CP','Issue Contents'],
		cellStyle: [ROWHEADER_TYPE.FIRST, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.LONG, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.LONG],
		cellWidth: ['15%', '15%', '20%', '20%', '30%'],
		rowdata: [
			{ row: ['23-07-07', 151, 'DV8413B DV8413B DV8413B','ABCDEF',  'App service not availabledssfgff'] },
			{ row: ['23-07-07', 23, 'DV8413B DV8413B DV8413B', 'ABC', 'Schedule error Schedule errorSchedule error'] },
			{ row: ['23-07-07', 1, 'DV8413B','ABC', 'Not playable'] },
			{ row: ['23-07-07', 5, 'DV8413B','GHI',  'App service not available'] },
			{ row: ['23-07-07', 5, 'DV8413B','JKL', 'Schedule error'] },
			{ row: ['23-07-07', 151, 'DV8413B DV8413B DV8413B','ABCDEF',  'App service not availabledssfgff'] },
			{ row: ['23-07-07', 23, 'DV8413B DV8413B DV8413B', 'ABC',  'Schedule error Schedule errorSchedule error'] },
			{ row: ['23-07-07', 1, 'DV8413B','ABC', 'Not playable'] },
			{ row: ['23-07-07', 5,  'DV8413B','GHI',  'App service not available'] },
			{ row: ['23-07-07', 5,   'DV8413B','JKL', 'Schedule error'] },
		],
	},

	service_data_issues: {
		title: 'Service Data Issuess',
		existTooltip: false,
		tooltip: 'Service Data Issues tooltip message..!!',
		header: ['Date', 'Country', 'Platform', 'Ch No. / VOD', 'CP', 'Issue Contents'],
		cellStyle: [ROWHEADER_TYPE.FIRST, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.LONG, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.LONG],
		cellWidth: ['20%', '10%', '10%',  '20%', '10%','20%'],
		rowdata: [
			{ row: ['23-07-07', 151, 99,  'DV8413B DV8413B DV8413B','ABCDEF', 'App service not availabledssfgff'] },
			{ row: ['23-07-07', 23, 11,  'DV8413B DV8413B DV8413B', 'ABC','Schedule error Schedule errorSchedule error'] },
			{ row: ['23-07-07', 1, 2, 'DV8413B','ABC',  'Not playable'] },
			{ row: ['23-07-07', 5, 5, 'DV8413B', 'GHI', 'App service not available'] },
			{ row: ['23-07-07', 5, 5,  'DV8413B', 'JKL','Schedule error'] },
			{ row: ['23-07-07', 151, 99,  'DV8413B DV8413B DV8413B','ABCDEF', 'App service not availabledssfgff'] },
			{ row: ['23-07-07', 23, 11,  'DV8413B DV8413B DV8413B', 'ABC','Schedule error Schedule errorSchedule error'] },
			{ row: ['23-07-07', 1, 2, 'DV8413B','ABC',  'Not playable'] },
			{ row: ['23-07-07', 5, 5, 'DV8413B', 'GHI', 'App service not available'] },
			{ row: ['23-07-07', 5, 5,  'DV8413B', 'JKL','Schedule error'] },
			{ row: ['23-07-07', 151, 99,  'DV8413B DV8413B DV8413B','ABCDEF', 'App service not availabledssfgff'] },
			{ row: ['23-07-07', 23, 11,  'DV8413B DV8413B DV8413B', 'ABC','Schedule error Schedule errorSchedule error'] },
			{ row: ['23-07-07', 1, 2, 'DV8413B','ABC',  'Not playable'] },
			{ row: ['23-07-07', 5, 5, 'DV8413B', 'GHI', 'App service not available'] },
			{ row: ['23-07-07', 5, 5,  'DV8413B', 'JKL','Schedule error'] },
			{ row: ['23-07-07', 151, 99,  'DV8413B DV8413B DV8413B','ABCDEF', 'App service not availabledssfgff'] },
			{ row: ['23-07-07', 23, 11,  'DV8413B DV8413B DV8413B', 'ABC','Schedule error Schedule errorSchedule error'] },
			{ row: ['23-07-07', 1, 2, 'DV8413B','ABC',  'Not playable'] },
			{ row: ['23-07-07', 5, 5, 'DV8413B', 'GHI', 'App service not available'] },
			{ row: ['23-07-07', 5, 5,  'DV8413B', 'JKL','Schedule error'] },
		],
	},
}

export const dashboard_contents_tabledata = {
	cmp_issues : {
		title: 'CMP Issues',
		existTooltip: true,
		tooltip: 'CMP Issues tooltip message..!!',
		header: ['Date', 'Country', 'Issue classification', 'Issue Contents'],
		cellStyle: [ROWHEADER_TYPE.FIRST, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.LONG],
		cellWidth: ['15%', '10%', '30%', '45%'],
		rowdata: [
			{ row: ['23-07-07', 123, 'Channel Organization',  'App service not available App service not available dsfs'] },
			{ row: ['23-07-07', 154, 'APP Organization',  'Schedule error Schedule errorSchedule errorSchedule '] },
			{ row: ['23-07-07', 14, 'Data Deployment',  'Not playable Not playable Not playable Not playable'] },
			{ row: ['23-07-07', 6, 'Channel Organization',  'App service not available'] },
			{ row: ['23-07-07', 7, 'APP Organization',  'Schedule error'] },
			{ row: ['23-07-07', 123, 'Channel Organization',  'App service not available App service not available dsfs'] },
			{ row: ['23-07-07', 154, 'APP Organization',  'Schedule error Schedule errorSchedule errorSchedule '] },
			{ row: ['23-07-07', 14, 'Data Deployment',  'Not playable Not playable Not playable Not playable'] },
			{ row: ['23-07-07', 6, 'Channel Organization',  'App service not available'] },
			{ row: ['23-07-07', 7, 'APP Organization',  'Schedule error'] },
			{ row: ['23-07-07', 123, 'Channel Organization',  'App service not available App service not available dsfs'] },
			{ row: ['23-07-07', 154, 'APP Organization',  'Schedule error Schedule errorSchedule errorSchedule '] },
			{ row: ['23-07-07', 14, 'Data Deployment',  'Not playable Not playable Not playable Not playable'] },
			{ row: ['23-07-07', 6, 'Channel Organization',  'App service not available'] },
			{ row: ['23-07-07', 7, 'APP Organization',  'Schedule error'] },
		]
	},
	deivce_issues : {
		title: 'CMP Issues',
		existTooltip: true,
		tooltip: 'CMP Issues tooltip message..!!',
		header: ['Date', 'Country', 'Issue classification', 'Issue Contents'],
		cellStyle: [ROWHEADER_TYPE.FIRST, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.LONG],
		cellWidth: ['15%', '10%', '30%', '45%'],
		rowdata: [
			{ row: ['23-07-07', 123, 'Channel Organization',  'App service not available App service not available dsfs'] },
			{ row: ['23-07-07', 154, 'APP Organization',  'Schedule error Schedule errorSchedule errorSchedule '] },
			{ row: ['23-07-07', 14, 'Data Deployment',  'Not playable Not playable Not playable Not playable'] },
			{ row: ['23-07-07', 6, 'Channel Organization',  'App service not available'] },
			{ row: ['23-07-07', 7, 'APP Organization',  'Schedule error'] },
			{ row: ['23-07-07', 123, 'Channel Organization',  'App service not available App service not available dsfs'] },
			{ row: ['23-07-07', 154, 'APP Organization',  'Schedule error Schedule errorSchedule errorSchedule '] },
			{ row: ['23-07-07', 14, 'Data Deployment',  'Not playable Not playable Not playable Not playable'] },
			{ row: ['23-07-07', 6, 'Channel Organization',  'App service not available'] },
			{ row: ['23-07-07', 7, 'APP Organization',  'Schedule error'] },
			{ row: ['23-07-07', 123, 'Channel Organization',  'App service not available App service not available dsfs'] },
			{ row: ['23-07-07', 154, 'APP Organization',  'Schedule error Schedule errorSchedule errorSchedule '] },
			{ row: ['23-07-07', 14, 'Data Deployment',  'Not playable Not playable Not playable Not playable'] },
			{ row: ['23-07-07', 6, 'Channel Organization',  'App service not available'] },
			{ row: ['23-07-07', 7, 'APP Organization',  'Schedule error'] },
		]
	},
	cp_issues : {
		title: 'CP Issuess',
		existTooltip: true,
		tooltip: 'CP Issues tooltip message..!!',
		header: ['Date', 'Country', 'CP', 'Ch / VOD', 'Issue Contents'],
		cellStyle: [ROWHEADER_TYPE.FIRST, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.LONG, ROWHEADER_TYPE.LONG],
		cellWidth: ['20%', '10%', '20%', '20%', '30%'],
		rowdata: [
			{ row: ['23-07-07', 151,'ABCDEF',  'DV8413B DV8413B DV8413B', 'App service not availabledssfgff'] },
			{ row: ['23-07-07', 23, 'ABC','DV8413B DV8413B DV8413B',  'Schedule error Schedule errorSchedule error'] },
			{ row: ['23-07-07', 1, 'ABC', 'DV8413B','Not playable'] },
			{ row: ['23-07-07', 5, 'GHI', 'DV8413B', 'App service not available'] },
			{ row: ['23-07-07', 5,'JKL',  'DV8413B','Schedule error'] },
			{ row: ['23-07-07', 151,'ABCDEF', 'DV8413B DV8413B DV8413B',  'App service not availabledssfgff'] },
			{ row: ['23-07-07', 23,  'ABC','DV8413B DV8413B DV8413B',  'Schedule error Schedule errorSchedule error'] },
			{ row: ['23-07-07', 1, 'ABC','DV8413B', 'Not playable'] },
			{ row: ['23-07-07', 5, 'GHI',  'DV8413B', 'App service not available'] },
			{ row: ['23-07-07', 5,  'JKL', 'DV8413B', 'Schedule error'] },
			{ row: ['23-07-07', 151,'ABCDEF',  'DV8413B DV8413B DV8413B', 'App service not availabledssfgff'] },
			{ row: ['23-07-07', 23, 'ABC','DV8413B DV8413B DV8413B',  'Schedule error Schedule errorSchedule error'] },
			{ row: ['23-07-07', 1, 'ABC', 'DV8413B','Not playable'] },
			{ row: ['23-07-07', 5, 'GHI', 'DV8413B', 'App service not available'] },
			{ row: ['23-07-07', 5,'JKL',  'DV8413B','Schedule error'] },
			{ row: ['23-07-07', 151,'ABCDEF', 'DV8413B DV8413B DV8413B',  'App service not availabledssfgff'] },
			{ row: ['23-07-07', 23,  'ABC','DV8413B DV8413B DV8413B',  'Schedule error Schedule errorSchedule error'] },
			{ row: ['23-07-07', 1, 'ABC','DV8413B', 'Not playable'] },
			{ row: ['23-07-07', 5, 'GHI',  'DV8413B', 'App service not available'] },
			
		],
	}
}

export const dashboard_statistics_tabledata = {
	cp_issues : {
		title: 'Statistics Issuess',
		existTooltip: false,
		tooltip: 'Statistics Issues tooltip message..!!',
		header: ['Date', 'Region', 'Country', 'Platform', 'Channel / VOD', 'CP', 'Indicator', 'value', 'Rete of increase and decrease'],
		cellStyle: [ROWHEADER_TYPE.FIRST, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.LONG],
		cellWidth: ['10%', '10%', '10%','10%','10%','10%','10%','10%','20%'],
		rowdata: [
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['23-07-07', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
		],
	}

}

export const dashboard_statistics_beacon_tabledata = {
	beacon_data_issue : {
		title: 'Beacon Issuess',
		existTooltip: false,
		tooltip: 'Beacon Issues tooltip message..!!',
		header: ['Issue Code', 'Period', 'Beacon Type', 'Indicator', 'Detecting Type', 'Value', 'Jira', 'Column', 'RIC Column'],
		cellStyle: [ROWHEADER_TYPE.FIRST, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.LONG],
		cellWidth: ['10%', '10%', '10%','10%','10%','10%','10%','10%','20%'],
		rowdata: [
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
			{ row: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'TextTextTextTextTextTextTextTextTextTextText'] },
		],
	}
}

export const dashboard_statistics_beacon_chart = {
	value_graph : {
		data: {
			labels: ['D-14', 'D-13', 'D-12', 'D-11', 'D-10', 'D-9', 'D-8', 'D-7', 'D-6', 'D-5', 'D-4', 'D-3', 'D-2', 'D-1', 'Today'],
			datasets: [
				{
					label: 'This week',
					data: [-5, -2, -4, -3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 15, 10],
					fill: false,
					pointRadius: 3,
					borderColor: CHART_COLORS.MINT, //'#85DDDB',
					//point style
					pointBorderColor: CHART_COLORS.WHITE, //'#FFFFFF',
					pointBackgroundColor: CHART_COLORS.MINT, //'#85DDDB',
					pointBorderWidth: 2,
					order: 2,
				},
				{
					label: 'baseline',
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					fill: false,
					pointRadius: 0, //포인트 삭제
					borderColor: '#F6C065',
					borderDash: [5, 5],
					borderDashOffset: 2,
					order: 1,
				},
			],
		},
		options: {
			legend: {
				display: false,
			},
			scales: {
				y: {
					min: -20,
					max: 25,
				},
			},
		},
	},
	changes_graph : {
		data: {
			labels: ['D-14', 'D-13', 'D-12', 'D-11', 'D-10', 'D-9', 'D-8', 'D-7', 'D-6', 'D-5', 'D-4', 'D-3', 'D-2', 'D-1', 'Today'],
			datasets: [
				{
					label: 'This week',
					data: [-5, -2, -4, -3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 15, 10],
					fill: false,
					borderColor: CHART_COLORS.MINT, //'#85DDDB',
					//point style
					pointBorderColor: CHART_COLORS.WHITE, //'#FFFFFF',
					pointBackgroundColor: CHART_COLORS.MINT, //'#85DDDB',
					pointBorderWidth: 2,
					order: 2,
				},
			],
		},
		options: {
			legend: {
				display: false,
			},
			scales: {
				y: {
					min: -20,
					max: 25,
				},
			},
		},
	}
}
