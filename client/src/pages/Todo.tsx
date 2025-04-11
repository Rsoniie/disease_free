import React from "react";
import {
  Box,
  Typography,
  Checkbox,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Badge,
  Chip,
} from "@mui/material";
import {
  FiHome,
  FiCheckSquare,
  FiBell,
  FiSearch,
  FiMenu,
} from "react-icons/fi";
import { FaTemperatureHigh, FaHeadSideCough } from "react-icons/fa";

// Reusable data
const measures = [
  { 
    text: "Use prescribed medications", 
    icon: <FaTemperatureHigh size={14} />,
    category: "fever" 
  },
  { 
    text: "Use warm/cold packs when necessary",
    category: "fever" 
  },
  { 
    text: "Drink warm water frequently",
    category: "fever" 
  },
  { 
    text: "Get plenty of rest",
    category: "both" 
  },
  { 
    text: "In case of adult, serve ORS if necessary", 
    important: true,
    category: "fever" 
  },
  { 
    text: "Using mosquito coils or repellents", 
    icon: <FaHeadSideCough size={14} />,
    category: "dengue" 
  },
  { 
    text: "Once fever disappears, wear clean clothes", 
    important: true,
    category: "fever" 
  },
];

const activities = [
  "Consulted 1-5 volunteers",
  "Consulted a fever case",
  "Read two articles on dengue",
];

const Section = ({ title, icon, category }: { title: string; icon?: React.ReactNode; category?: string }) => (
  <Box mb={3}>
    <Box display="flex" alignItems="center" gap={1.5} mb={2.5}>
      <Avatar sx={{ 
        bgcolor: "primary.light", 
        width: 36, 
        height: 36,
        "& svg": { color: "primary.main" }
      }}>
        {icon}
      </Avatar>
      <Typography variant="h6" fontWeight={700} color="text.primary">
        {title}
      </Typography>
    </Box>

    {measures
      .filter(item => item.category === category || item.category === "both")
      .map((item, idx) => (
        <Box
          key={idx}
          display="flex"
          alignItems="center"
          mb={1.5}
          sx={{
            p: 1.5,
            borderRadius: 2,
            bgcolor: "background.paper",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            "&:hover": { 
              bgcolor: "action.hover",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
            },
          }}
        >
          <Checkbox
            size="small"
            sx={{ 
              color: "primary.main",
              "&.Mui-checked": {
                color: "primary.main",
              },
            }}
          />
          <Typography variant="body1" sx={{ flex: 1, ml: 1 }}>
            {item.text}
            {item.important && (
              <Chip 
                label="Important" 
                size="small" 
                sx={{ 
                  ml: 1,
                  height: 20,
                  fontSize: "0.65rem",
                  bgcolor: "error.light",
                  color: "error.main"
                }} 
              />
            )}
          </Typography>
          {item.icon && (
            <Box 
              sx={{ 
                ml: 1,
                color: "primary.main",
                display: "flex",
                alignItems: "center"
              }}
            >
              {item.icon}
            </Box>
          )}
        </Box>
      ))}
  </Box>
);

const TodoList: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState("todo");

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
          Health Checklist
        </Typography>
        <Box display="flex" gap={0.5}>
          <IconButton sx={{ color: "text.secondary" }}>
            <FiSearch size={20} />
          </IconButton>
          <IconButton sx={{ color: "text.secondary" }}>
            <Badge badgeContent={3} color="error">
              <FiBell size={20} />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "text.secondary" }}>
            <FiMenu size={20} />
          </IconButton>
        </Box>
      </Box>

      {/* Main content */}
      <Card sx={{ 
        mb: 3, 
        borderRadius: 3, 
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        border: "1px solid",
        borderColor: "divider"
      }}>
        <CardContent sx={{ p: 3 }}>
          <Section
            title="Fever Management"
            icon={<FaTemperatureHigh />}
            category="fever"
          />
        </CardContent>
      </Card>

      <Card sx={{ 
        mb: 3, 
        borderRadius: 3, 
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        border: "1px solid",
        borderColor: "divider"
      }}>
        <CardContent sx={{ p: 3 }}>
          <Section
            title="Dengue Prevention"
            icon={<FaHeadSideCough />}
            category="dengue"
          />
        </CardContent>
      </Card>

      {/* Activity cards */}
      <Typography variant="h6" fontWeight={700} mb={2} color="text.primary">
        Your Activity
      </Typography>
      <Box display="flex" flexDirection="column" gap={2} mb={4}>
        {activities.map((activity, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: 2,
              border: "1px solid",
              borderColor: "divider",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              transition: "all 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }
            }}
          >
            <CardContent sx={{ py: 2, px: 2.5 }}>
              <Box display="flex" alignItems="center">
                <Box sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "primary.main",
                  mr: 1.5
                }} />
                <Typography variant="body1">{activity}</Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

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
            { icon: <FiBell size={20} />, label: "Alerts", value: "alerts" },
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
              {item.value === "alerts" ? (
                <Badge badgeContent={3} color="error">
                  {item.icon}
                </Badge>
              ) : (
                item.icon
              )}
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

export default TodoList;