import "./App.css";
import NPSBuckets from "./components/NPSBoard/NPSBuckets";
import SnapShotNewAndReturnUsers from "./components/SnapShot/SnapShotNewAndReturnUsers";
import SnapShotUserActivity from "./components/SnapShot/SnapShotUserActivity";
import TodayViewUsageSource from "./components/TodayView/TodayViewUsageSource";
import { activeData } from "./data/activeData";
import { newAndReturnUserData } from "./data/newAndReturnUserData";
import { usageSourceData } from "./data/usageSourceData";
import NPSScoreTrend from "./components/NPSBoard/NPSScoreTrend";
import { dailyScoreTrendData } from "./data/npsBoardData/dailyScoreTrendData";
import { npsBucketsData } from "./data/npsBucketsData";
import NPSBucketTrend from "./components/NPSBoard/NPSBucketTrend";
import MAVActiveUsers from "./components/MobileAppView/MAVActiveUsers";
import { dailyActiveUserData } from "./data/mobileAppView/dailyActiveUserData";
import { weeklyActiveUserData } from "./data/mobileAppView/weeklyActiveUserData";
import { monthlyActiveUserData } from "./data/mobileAppView/monthlyActiveUserData";
import MAVConvensions from "./components/MobileAppView/MAVConvensions";
import { dailyConvensionData } from "./data/mobileAppView/dailyConvensionData";
import { weeklyConventionData } from "./data/mobileAppView/weeklyConvesionData";
import { monthlyConvensionData } from "./data/mobileAppView/monthlyConventionData";
import MAVDistributionByAppVersion from "./components/MobileAppView/MAVDistributionByAppVersion";
import { distributionByAppVersion } from "./data/mobileAppView/distributionByAppVersionData";
import MAVAppLaunchedAndConvension from "./components/MobileAppView/MAVAppLaunchedAndConvension";
import { dailyAppLaunchedAndConvensionData } from "./data/mobileAppView/dailyAppLaunchedAndConvensionData";
import { weeklyAppLaunchedAndConvensionData } from "./data/mobileAppView/weeklyAppLaunchedAndConvensionData";
import { monthlyAppLaunchedAndConvensionData } from "./data/mobileAppView/monthlyAppLaunchedAndConvensionData";
import UsageAndRevenueTrendData from "./components/MobileAppView/UsageAndRevenueTrendData";
import { usageAndRevenueTrendData } from "./data/mobileAppView/usageAndRevenueTrendData";
import { weeklyScoreTrendData } from "./data/npsBoardData/weeklyScoreTrendData";
import { monthlyScoreTrendData } from "./data/npsBoardData/monthlyScoreTrendData";
import { dailyBucketTrendsData } from "./data/npsBucketTrendData/dailyBucketTrendData";
import { weeklyBucketTrendsData } from "./data/npsBucketTrendData/weeklyBucketTrendData";
import { monthlyBucketTrendsData } from "./data/npsBucketTrendData/monthlyBucketTrendData";
import NPSTotalResponceReceivedTrend from "./components/NPSBoard/NPSTotalResponceReceivedTrend";
import { dailyTotalResponceReceuvedTrendData } from "./data/totalResponceReceiveTrendData/dailyTotalResponceReceiveTrendData";
import { weekyTotalResponceReceuvedTrendData } from "./data/totalResponceReceiveTrendData/weeklyTotalResponceReceiveTrendData";
import { monthlyTotalResponceReceuvedTrendData } from "./data/totalResponceReceiveTrendData/monthlyTotalResponceReceiveTrendData";
import NPSRatingDistribution from "./components/NPSBoard/NPSRatingDistribution";
import { ratingDistributionData } from "./data/ratingDistributionData";
import ActivationAndUninstall from "./components/UninstallView/ActivationAndUninstall";
import { dailyActiveAndUninstallData } from "./data/unInstallViewData/dailyActiveAndUninstallData";
import { weeklyActiveAndUninstallData } from "./data/unInstallViewData/weeklyActiveAndUninstallData";
import { monthlyActiveAndUninstallData } from "./data/unInstallViewData/monthlyActiveAndUninstallData";
import TrendOfRevenue from "./components/RevenueView/TrendOfRevenue";
import { dailyTrendRevenueData } from "./data/revenueView/dailyTrendRevenueData";
import { weeklyTrendRevenueData } from "./data/revenueView/weeklyTrendRevenueData";
import { monthlyTrendRevenueData } from "./data/revenueView/monthlyTrendRevenueData";
import UserCharged from "./components/CustomDashboard/UserCharged";
import { userChargedData } from "./data/customDashBoardData/userChargedData";
import AppLunchedAndCharged from "./components/CustomDashboard/AppLunchedAndCharged";
import GaugeChart from "./components/Examble Chart/GaugeChart";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "chart.js";

Chart.register(ChartDataLabels);

function App() {
  return (
    <div className="App p-12 bg-slate-50 grid grid-cols-2 gap-4">
      {/* SnapShot User Activity */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <SnapShotUserActivity activityUserData={activeData} />
      </div>

      {/* Snapshot New and Return Users */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <SnapShotNewAndReturnUsers newAndReturnUserData={newAndReturnUserData} />
      </div>

      {/* MAV Active Users */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <MAVActiveUsers dailyData={dailyActiveUserData} weeklyData={weeklyActiveUserData} monthlyData={monthlyActiveUserData} />
      </div>

      {/* MAV Convension */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <MAVConvensions dailyData={dailyConvensionData} weeklyData={weeklyConventionData} monthlyData={monthlyConvensionData} />
      </div>

      {/* MAV Distribution By App Version */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <MAVDistributionByAppVersion distributionByAppVersionData={distributionByAppVersion} />
      </div>

      {/* MAV App Launched And Convensions */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <MAVAppLaunchedAndConvension
          dailyData={dailyAppLaunchedAndConvensionData}
          weeklyData={weeklyAppLaunchedAndConvensionData}
          monthlyData={monthlyAppLaunchedAndConvensionData}
        />
      </div>

      {/* MAV Usage and Revenue Trend Data */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <UsageAndRevenueTrendData usageAndRevenueTrendData={usageAndRevenueTrendData} />
      </div>

      {/* Today View Usage Source */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <TodayViewUsageSource usageSourceData={usageSourceData} />
      </div>

      {/* NPS Buckets */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <NPSBuckets npsBucketsData={npsBucketsData} />
      </div>

      {/* NPS Score Trend */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <NPSScoreTrend dailyData={dailyScoreTrendData} weeklyData={weeklyScoreTrendData} monthlyData={monthlyScoreTrendData} />
      </div>

      {/* NPS Bucket Trend */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <NPSBucketTrend dailyData={dailyBucketTrendsData} weeklyData={weeklyBucketTrendsData} monthlyData={monthlyBucketTrendsData} />
      </div>

      {/* NPS Total Responces Trend */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <NPSTotalResponceReceivedTrend
          dailyData={dailyTotalResponceReceuvedTrendData}
          weeklyData={weekyTotalResponceReceuvedTrendData}
          monthlyData={monthlyTotalResponceReceuvedTrendData}
        />
      </div>

      {/* NPS Rating Distribution */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <NPSRatingDistribution ratingData={ratingDistributionData} />
      </div>

      {/* Activations and Uninstalls */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <ActivationAndUninstall dailyData={dailyActiveAndUninstallData} weeklyData={weeklyActiveAndUninstallData} monthlyData={monthlyActiveAndUninstallData} />
      </div>

      {/* Trend Of Revenue */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <TrendOfRevenue dailyData={dailyTrendRevenueData} weeklyData={weeklyTrendRevenueData} monthlyData={monthlyTrendRevenueData} />
      </div>

      {/* User Charged */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <UserCharged userChargedData={userChargedData} />
      </div>

      {/* App Lunched And Charged */}
      <div className="mb-4 w-full p-8 shadow-md bg-white">
        <AppLunchedAndCharged />
      </div>

      {/* Gauge Chart */}
      <div className="mb-4 w-full p-8 shadow-md bg-white flex justify-center">
        <GaugeChart />
      </div>
    </div>
  );
}

export default App;
