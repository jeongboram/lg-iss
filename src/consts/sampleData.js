import { CHART_COLORS } from '../components/charts/ChartConsts';
import { ROWHEADER_TYPE } from '../consts/IssConsts';

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
	service_data_issue: {
		title: 'LG Channles App Issues',
		existTooltip: true,
		tooltip: 'LG Channles App Issues tooltip message..!!',
		header: ['Date', 'Country', 'Platform', 'Isssule Contents'],
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
		cellWidth: ['20%', '10%', '10%', '60%'],
	},

	palyback_issue: {
		title: 'Playback Issuess',
		existTooltip: true,
		tooltip: 'Playback Issues tooltip message..!!',
		header: ['Date', 'Country', 'Platform', 'Isssule Contents'],
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
		cellWidth: ['20%', '10%', '10%', '60%'],
	},
	sample_data: {
		title: 'Sample Title',
		existTooltip: true,
		tooltip: 'Sample tooltip message..!!',
		header: ['head1', 'head2', 'head3', 'head4', 'head5', 'head6'],
		cellStyle: [ROWHEADER_TYPE.FIRST, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL],
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
		cellWidth: ['50%', '10%', '10%', '10%', '10%'],
	},
	sample_notitle_data: {
		existTooltip: false,
		tooltip: '',
		header: ['head1', 'head2', 'head3', 'head4', 'head5', 'head6'],
		cellStyle: [ROWHEADER_TYPE.FIRST, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL, ROWHEADER_TYPE.NORMAL],
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
		cellWidth: ['50%', '10%', '10%', '10%', '10%'],
	},
};
