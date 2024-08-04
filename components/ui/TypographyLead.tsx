interface TypographyLeadProps {
  children: React.ReactNode;
}

const TypographyLead: React.FC<TypographyLeadProps> = ({ children }) => {
  return (
    <div className="text-lg text-muted-foreground capitalize mt-6 mb-2">
      {children}
    </div>
  );
};

export default TypographyLead;
