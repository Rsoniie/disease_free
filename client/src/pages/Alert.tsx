import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Badge,
  Chip,
  Divider,
} from "@mui/material";
import {
  FiHome,
  FiCheckSquare,
  FiBell,
  FiSearch,
  FiUser,
  FiChevronRight,
} from "react-icons/fi";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const alerts = [
  {
    date: "Today",
    items: [
      {
        title: "Infection outbreak reported",
        description: "16 new conjunctivitis cases diagnosed in your area.",
        highlight: true,
        time: "2:45 PM",
      },
      {
        title: "Weather alert",
        description: "Heavy rain forecasted today. Remember your umbrella.",
        highlight: false,
        time: "9:30 AM",
      },
    ],
  },
  {
    date: "Yesterday",
    items: [
      {
        title: "Dengue prevention advisory",
        description: "Increase in mosquito activity detected. Use repellents.",
        highlight: true,
        time: "4:15 PM",
      },
      {
        title: "Community health check",
        description: "Free health screening this weekend at community center.",
        highlight: false,
        time: "11:20 AM",
      },
      {
        title: "Air quality notice",
        description: "Moderate air pollution levels expected tomorrow.",
        highlight: false,
        time: "8:00 AM",
      },
    ],
  },
];

const Alerts: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("alerts");

  return (
    <Box 
      sx={{ 
        maxWidth: "md", 
        mx: "auto", 
        px: { xs: 2, sm: 3 }, 
        pb: 10, 
        bgcolor: "background.default",
        minHeight: "100vh"
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 3,
          position: "sticky",
          top: 0,
          bgcolor: "background.default",
          zIndex: 10,
        }}
      >
        <Typography variant="h5" fontWeight={800} color="text.primary">
          Health Alerts
        </Typography>
        <Box display="flex" gap={0.5}>
          <IconButton sx={{ color: "text.secondary" }}>
            <FiSearch size={20} />
          </IconButton>
          <IconButton sx={{ color: "text.secondary" }}>
            <FiUser size={20} />
          </IconButton>
        </Box>
      </Box>

      {/* Alert sections */}
      {alerts.map((section, sidx) => (
        <Box key={sidx} mb={4}>
          <Chip
            label={section.date}
            sx={{
              mb: 2,
              bgcolor: "grey.100",
              color: "text.secondary",
              fontWeight: 600,
              fontSize: "0.75rem",
            }}
          />

          {section.items.map((item, idx) => (
            <Card
              key={idx}
              sx={{
                mb: 2,
                borderRadius: 2,
                border: "1px solid",
                borderColor: item.highlight ? "warning.light" : "divider",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                "&:hover": {
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                },
              }}
            >
              <CardContent sx={{ p: 2.5 }}>
                <Box display="flex" gap={2}>
                  <Box
                    sx={{
                      color: item.highlight ? "warning.main" : "primary.main",
                      fontSize: "1.25rem",
                      mt: 0.5,
                    }}
                  >
                    {item.highlight ? (
                      <FaExclamationTriangle />
                    ) : (
                      <IoMdInformationCircleOutline />
                    )}
                  </Box>
                  <Box flex={1}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      mb={0.5}
                    >
                      <Typography variant="subtitle1" fontWeight={600}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{ whiteSpace: "nowrap", ml: 1 }}
                      >
                        {item.time}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" mb={1.5}>
                      {item.description}
                    </Typography>
                    {item.highlight && (
                      <Box
                        display="flex"
                        alignItems="center"
                        sx={{
                          color: "primary.main",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          cursor: "pointer",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        View details <FiChevronRight style={{ marginLeft: 4 }} />
                      </Box>
                    )}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      ))}

      {/* Bottom Navigation */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          maxWidth: "md",
          mx: "auto",
          bgcolor: "background.paper",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          border: "1px solid",
          borderColor: "divider",
          zIndex: 10,
        }}
      >
        <Box 
          display="flex" 
          justifyContent="space-around" 
          alignItems="center" 
          py={1.5}
        >
          {[
            { icon: <FiHome size={20} />, label: "Home", value: "home" },
            { icon: <FiCheckSquare size={20} />, label: "Todo", value: "todo" },
            { 
              icon: (
                <Badge badgeContent={3} color="error">
                  <FiBell size={20} />
                </Badge>
              ), 
              label: "Alerts", 
              value: "alerts" 
            },
          ].map((item) => (
            <Box
              key={item.value}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                px: 2,
                py: 1,
                borderRadius: 2,
                ...(activeTab === item.value && {
                  "& svg": { color: "primary.main" },
                  "& .MuiTypography-root": { color: "primary.main" },
                }),
              }}
              onClick={() => setActiveTab(item.value)}
            >
              {item.icon}
              <Typography 
                variant="caption" 
                sx={{ 
                  mt: 0.5,
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  color: "text.secondary",
                }}
              >
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Alerts;