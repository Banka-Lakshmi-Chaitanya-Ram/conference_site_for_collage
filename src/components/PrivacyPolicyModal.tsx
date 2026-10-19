import React, { useEffect } from 'react';
import { X, Shield } from 'lucide-react';
import { conferenceConfig } from '../config/conferenceConfig';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  const { privacyPolicy } = conferenceConfig;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-policy-title"
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <button
          type="button"
          className="modal-close-trigger"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={16} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <Shield size={20} color="var(--vignan-crimson)" />
          <h3 id="privacy-policy-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 700, color: 'var(--academic-navy)', margin: 0 }}>
            {privacyPolicy.title}
          </h3>
        </div>

        <div style={{ borderBottom: '1px solid var(--border-light)', marginBottom: '16px' }} />

        <div style={{ fontSize: '13.5px', color: 'var(--text-body)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
          {privacyPolicy.text}
        </div>

        <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
