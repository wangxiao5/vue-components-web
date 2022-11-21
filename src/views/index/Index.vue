<template>
  <div>
    <el-row :gutter="24" style="margin-bottom: 20px">
      <el-col :span="6">
        <el-card shadow="always" class="in">
          <div class="fl">
            <p>本月进件</p>
            <p style="font-weight: bold">6588</p>
            <p>
              +20.12%
              <span style="font-size: 12px">与上月同比</span>
            </p>
          </div>
          <i class="el-icon-tickets ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="out">
          <div class="fl">
            <p>本月放款（元）</p>
            <p style="font-weight: bold">121000000</p>
            <p>
              +1.25%
              <span style="font-size: 12px">与上月同比</span>
            </p>
          </div>
          <i class="el-icon-money ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="allin">
          <div class="fl">
            <p>累计进件</p>
            <p style="font-weight: bold">128700</p>
            <p>
              +11.48%
              <span style="font-size: 12px">与去年同比</span>
            </p>
          </div>
          <i class="el-icon-date ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="always" class="allout">
          <div class="fl">
            <p>累计放款</p>
            <p style="font-weight: bold">923380079</p>
            <p>
              -2.06%
              <span style="font-size: 12px">与去年同比</span>
            </p>
          </div>
          <i class="el-icon-coin ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="18">
        <el-card>
          <div slot="header" style="line-height: 50px; text-align: center">
            <span>进件统计分析</span>
          </div>
          <div ref="analysis" style="height: 240px"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" style="line-height: 50px; text-align: center">
            <span>进件产品占比</span>
          </div>
          <div ref="percent" style="height: 240px"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24" style="margin-top: 10px">
      <el-col :span="12">
        <el-card class="box">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card class="item">
                <!-- <h4>更新 Github 模板</h4> -->
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card class="item">
                <!-- <h4>更新 Github 模板</h4> -->
                <p>王小虎 提交于 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card class="item">
                <!-- <h4>更新 Github 模板</h4> -->
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <el-calendar />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xData: ["20-01", "20-02", "20-03", "20-04", "20-05", "20-06", "20-07"], //实际应用中从后台请求数据
      yData: [150, 230, 224, 218, 135, 147, 260],
    };
  },
  mounted() {
    this.loadLine();
    this.drawPie();
  },
  methods: {
    loadLine() {
      var myChart = this.$echarts.init(this.$refs["analysis"]);
      myChart.setOption({
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.xData,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.yData,
            type: "line",
            smooth: true,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#4f88ff", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "white", // 100% 处的颜色
                  },
                ],
              },
            },
          },
        ],
      });
    },
    drawPie() {
      var myChart = this.$echarts.init(this.$refs["percent"]);
      let option = {
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b}:{d}%",
        },

        series: [
          {
            // color: [
            //   "#5470c6",
            //   "#91cc75",
            //   "#fac858",
            //   "#ee6666",
            //   "#73c0de",
            //   "#3ba272",
            //   "#fc8452",
            //   "#9a60b4",
            //   "#ea7ccc",
            // ],//没设置颜色，配色依次从中选择
            name: "访问来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "房闪贷" },
              { value: 310, name: "新车贷" },
              { value: 234, name: "资金贷" },
              { value: 135, name: "合力贷" },
              { value: 1548, name: "其他" },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.ico {
  float: right;
  font-size: 90px;
  color: rgba(255, 255, 255, 0.3);
}
.in {
  background: #4f88ff;
  p {
    line-height: 30px;
    color: #fff;
    font-size: 16px;
  }
}
.out {
  background: red;
  p {
    line-height: 30px;
    color: #fff;
    font-size: 16px;
  }
}

.allin {
  background: #5050ff;
  p {
    line-height: 30px;
    color: #fff;
    font-size: 16px;
  }
}
.allout {
  background: #f49b3b;
  p {
    line-height: 30px;
    color: #fff;
    font-size: 16px;
  }
}
.box {
  height: 702px;
}
.item {
  height: 170px;
  p {
    font-size: 18px;
    line-height: 150px;
  }
}
</style>