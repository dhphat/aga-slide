export type Language = 'en' | 'vi';

export const content = {
  en: {
    hero: {
      title: "Agentic Game Data Analytics",
      subtitle: "Bridging the gap between raw datasets and actionable intelligence.",
      scroll: "Scroll to Discover"
    },
    pipeline: {
      title: "Data Pipeline: The DuckDB Engine",
      subtitle: "Bypassing firewalls with REST and enabling real-time In-Memory OLAP",
      nodes: {
        cloud: "Supabase REST API",
        pandas: "Pandas Dataframe",
        duckdb: "DuckDB (RAM View)"
      },
      desc: "By directly fetching cloud data via REST APIs, casting it into Pandas DataFrames, and mounting it as in-memory DuckDB views, we bypass local firewall constraints and achieve sub-second analytical query performance on gigabytes of structured gameplay events."
    },
    orchestration: {
      title: "Multi-Agent Orchestration",
      subtitle: "Autonomous Routing & Intelligent Fallbacks",
      core: "LLM Core",
      agents: {
        sql: "SQL Agent",
        viz: "Viz Agent",
        insight: "Insight Agent"
      },
      fallbackText: "Try / Except Fallback Mechanism",
      fallbackDesc: "The system dynamically routes analytical requests through specialized sub-agents. To ensure enterprise-grade reliability, it implements a robust fallback strategy: if the primary Gemini 2.5 Flash model encounters '429 Quota Exceeded' errors, the pipeline seamlessly fails over to OpenAI GPT-4o-mini with zero user interruption."
    },
    ml: {
      title: "Machine Learning Churn Predictor",
      subtitle: "Proactive Retention using RandomForestClassifier",
      features: "Feature Engineering Pipeline",
      featuresList: [
        "LabelEncoding: VIP Tiers (Bronze → Platinum)",
        "Aggregation: Lifetime Total USD Spent",
        "Ratios: Playtime vs Current Level"
      ],
      desc: "Leveraging Scikit-Learn's RandomForestClassifier to train predictive models on historical player behavior. By transforming categorical variables and aggregating player investment metrics, the model outputs a real-time 'Churn Risk Score' probability array, enabling targeted retention campaigns before critical abandonment."
    },
    anomaly: {
      title: "Live Anomaly Detection",
      subtitle: "Autonomous Watchdog with Real-Time Alerting",
      systemHealth: "System Health Monitor",
      alertBadge: "CRITICAL ALERT",
      triggers: "Configured Heuristic Triggers:",
      trigger1: "Spike in 1-Star Bug Reports (>= 15/hr)",
      trigger2: "VIP Gold Daily Rev. < Silver Rev.",
      desc: "The Anomaly Agent runs as a cron-based watchdog, continuously aggregating incoming telemetry. It evaluates hard-coded heuristic thresholds against real-time streams to detect critical economy exploits or server degradation, generating instant incident reports without manual polling."
    },
    cta: {
      title: "Ready to explore the data?",
      summary: "A production-ready framework fusing high-speed in-memory OLAP engines with proactive ML models to revolutionize game data analytics.",
      button: "Launch Live Demo"
    }
  },
  vi: {
    hero: {
      title: "Nền tảng Phân tích Game Agentic",
      subtitle: "Thu hẹp khoảng cách giữa tập dữ liệu thô và trí tuệ hành động.",
      scroll: "Cuộn để Khám phá"
    },
    pipeline: {
      title: "Đường ống Dữ liệu: Động cơ DuckDB",
      subtitle: "Vượt tường lửa bằng REST và kích hoạt OLAP Trong Bộ Nhớ thời gian thực",
      nodes: {
        cloud: "Supabase REST API",
        pandas: "Pandas Dataframe",
        duckdb: "DuckDB (RAM View)"
      },
      desc: "Bằng cách tìm nạp trực tiếp dữ liệu đám mây qua REST API, ép kiểu vào Pandas DataFrames và gắn dưới dạng view DuckDB trong bộ nhớ, chúng tôi vượt qua rào cản tường lửa cục bộ và đạt hiệu suất truy vấn phân tích dưới một giây trên hàng gigabyte sự kiện gameplay có cấu trúc."
    },
    orchestration: {
      title: "Điều phối Đa Tác Nhân",
      subtitle: "Định tuyến Tự chủ & Dự phòng Thông minh",
      core: "Lõi LLM",
      agents: {
        sql: "Tác nhân SQL",
        viz: "Tác nhân Trực quan",
        insight: "Tác nhân Chuyên sâu"
      },
      fallbackText: "Cơ chế Dự phòng Try / Except",
      fallbackDesc: "Hệ thống định tuyến linh hoạt các yêu cầu phân tích qua các tác nhân con chuyên biệt. Để đảm bảo độ tin cậy cấp doanh nghiệp, hệ thống áp dụng chiến lược dự phòng mạnh mẽ: nếu mô hình chính Gemini 2.5 Flash gặp lỗi '429 Quá Băng thông', đường ống sẽ tự động chuyển sang OpenAI GPT-4o-mini mà không làm gián đoạn trải nghiệm người dùng."
    },
    ml: {
      title: "Mô hình Dự đoán Rời bỏ",
      subtitle: "Duy trì Chủ động sử dụng RandomForestClassifier",
      features: "Đường ống Kỹ thuật Đặc trưng (Feature Engineering)",
      featuresList: [
        "Mã hóa Label (LabelEncoding): Cấp độ VIP (Đồng → Bạch kim)",
        "Tổng hợp: Tổng chi tiêu USD trọn đời",
        "Tỷ lệ: Thời gian chơi so với Cấp độ hiện tại"
      ],
      desc: "Tận dụng RandomForestClassifier của Scikit-Learn để huấn luyện các mô hình dự đoán trên hành vi lịch sử của người chơi. Bằng cách biến đổi các biến phân loại và tổng hợp số liệu đầu tư, mô hình xuất ra mảng xác suất 'Điểm Nguy cơ Rời bỏ' theo thời gian thực, cho phép các chiến dịch giữ chân mục tiêu trước khi lượng lớn người chơi từ bỏ."
    },
    anomaly: {
      title: "Phát hiện Bất thường Trực tiếp",
      subtitle: "Người canh gác Tự chủ với Cảnh báo Thời gian thực",
      systemHealth: "Giám sát Sức khỏe Hệ thống",
      alertBadge: "CẢNH BÁO NGHIÊM TRỌNG",
      triggers: "Các Trình kích hoạt Cấu hình:",
      trigger1: "Tăng đột biến Báo cáo Lỗi 1 Sao (>= 15/giờ)",
      trigger2: "Doanh thu VIP Vàng < Bạc",
      desc: "Tác nhân Dị thường hoạt động như một hệ thống giám sát dựa trên cron, liên tục tổng hợp dữ liệu từ xa (telemetry). Nó đánh giá các ngưỡng heuristic được mã hóa cứng so với luồng dữ liệu thời gian thực để phát hiện lạm phát kinh tế (exploits) hoặc suy giảm máy chủ (server degradation), lập tức tạo báo cáo sự cố mà không cần thăm dò thủ công."
    },
    cta: {
      title: "Sẵn sàng khám phá dữ liệu?",
      summary: "Một cấu trúc (framework) sẵn sàng cho sản xuất (production-ready) kết hợp các động cơ OLAP trong bộ nhớ tốc độ cao với mô hình học máy (ML) chủ động nhằm cách mạng hóa phân tích dữ liệu game.",
      button: "Khởi chạy Demo Trực tiếp"
    }
  }
};
