import { useState, useEffect } from 'react';
import { Clock, Dot } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface LastRefreshedProps {
  timestamp: Date;
}

export function LastRefreshed({ timestamp }: LastRefreshedProps) {
  const [timeAgo, setTimeAgo] = useState<string>('');

  // Update the time ago text every minute
  useEffect(() => {
    const updateTimeAgo = () => {
      const now = new Date();
      const diffMs = now.getTime() - timestamp.getTime();
      const diffMins = Math.floor(diffMs / 60000);
      
      if (diffMins < 1) {
        setTimeAgo('just now');
      } else if (diffMins === 1) {
        setTimeAgo('1 minute ago');
      } else if (diffMins < 60) {
        setTimeAgo(`${diffMins} minutes ago`);
      } else {
        const diffHours = Math.floor(diffMins / 60);
        if (diffHours === 1) {
          setTimeAgo('1 hour ago');
        } else {
          setTimeAgo(`${diffHours} hours ago`);
        }
      }
    };

    // Update immediately
    updateTimeAgo();
    
    // Then update every minute
    const interval = setInterval(updateTimeAgo, 60000);
    
    return () => clearInterval(interval);
  }, [timestamp]);

  return (
    <Badge variant="outline" className="font-normal">
        <Dot className="animate-pulse text-green-500" />
        <Clock className="size-4 mr-2" />
        Last refreshed {timeAgo}
    </Badge>
  );
}